import os
import re
import json

# Configuration
INPUT_DIR = r"d:\000_portfolio_2025\Portfolio\101_Credit Risk Regulatory Capstone\content_drafts\flashcards_modules"
OUTPUT_FILE = r"d:\000_portfolio_2025\Portfolio\101_Credit Risk Regulatory Capstone\data\flashcards.ts"

def parse_module(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    
    # Extract Module Title (First line usually)
    module_title = "Unknown Module"
    if lines:
        module_title = lines[0].strip().replace('#', '').strip()
        # Remove "Module X: " prefix if present for cleaner title, or keep it? 
        # Let's keep it as is for now, or maybe clean it up.
        # Example: "Module 1: Core Banking & Risk Overview as flashcard-ready notes."
    
    cards = []
    current_card = None
    
    # Regex for card headers: ### #1 – Title
    card_header_pattern = re.compile(r'^###\s+#(\d+)\s+[–-]\s+(.*)')
    
    # Split by separator ---
    # Actually, iterating line by line might be safer to capture content between headers
    
    current_content = []
    
    for line in lines:
        match = card_header_pattern.match(line)
        if match:
            # If we have a current card, save it
            if current_card:
                current_card['content'] = '\n'.join(current_content).strip()
                cards.append(current_card)
            
            # Start new card
            card_id = match.group(1)
            card_title = match.group(2).strip()
            current_card = {
                'id': card_id,
                'title': card_title,
                'content': ''
            }
            current_content = []
        elif line.strip() == '---':
            continue
        elif current_card:
            # Add line to current content
            current_content.append(line)
            
    # Add the last card
    if current_card:
        current_card['content'] = '\n'.join(current_content).strip()
        cards.append(current_card)
        
    return {
        'title': module_title,
        'cards': cards
    }

def generate_ts_file():
    modules = []
    
    # Iterate over module1.md, module2.md, etc.
    # Sort by number
    files = [f for f in os.listdir(INPUT_DIR) if f.startswith('module') and f.endswith('.md')]
    
    # Sort files numerically (module1, module2, ..., module10)
    def get_module_num(filename):
        match = re.search(r'module(\d+)', filename)
        return int(match.group(1)) if match else 0
        
    files.sort(key=get_module_num)
    
    for filename in files:
        file_path = os.path.join(INPUT_DIR, filename)
        print(f"Processing {filename}...")
        module_data = parse_module(file_path)
        
        # ID can be just the number
        module_id = str(get_module_num(filename))
        
        modules.append({
            'id': module_id,
            'title': module_data['title'],
            'cards': module_data['cards']
        })
        
    # Generate TypeScript content
    ts_content = """export interface Flashcard {
  id: string;
  title: string;
  content: string;
}

export interface FlashcardModule {
  id: string;
  title: string;
  cards: Flashcard[];
}

export const flashcards: FlashcardModule[] = """
    
    # Convert to JSON string but we need to be careful with escaping for TS source file
    # Actually, standard JSON.dumps is usually fine for TS/JS objects if we just assign it
    
    json_str = json.dumps(modules, indent=2, ensure_ascii=False)
    
    # We need to escape backticks if they exist in the content because we might want to use template literals?
    # Or just use the JSON string directly.
    # However, if we use `export const flashcards = ...` and paste the JSON, it works.
    # But if the content contains backticks or ${}, and we put it in a backtick string, it breaks.
    # JSON.dumps produces double-quoted strings, which is safe for TS code (except for newlines maybe?)
    # JSON.dumps escapes newlines as \n, which is valid in TS strings.
    
    ts_content += json_str + ";"
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Successfully generated {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_ts_file()
