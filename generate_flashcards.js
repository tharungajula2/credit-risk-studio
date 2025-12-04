const fs = require('fs');
const path = require('path');

const INPUT_DIR = String.raw`d:\000_portfolio_2025\Portfolio\101_Credit Risk Regulatory Capstone\content_drafts\flashcards_modules`;
const OUTPUT_FILE = String.raw`d:\000_portfolio_2025\Portfolio\101_Credit Risk Regulatory Capstone\data\flashcards.ts`;

function parseModule(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    let moduleTitle = "Unknown Module";
    if (lines.length > 0) {
        moduleTitle = lines[0].trim().replace(/^#+\s*/, '').trim();
    }

    const cards = [];
    let currentCard = null;
    let currentContent = [];

    // Regex for card headers: ### #1 – Title
    // Handling potential variations in dash characters
    const cardHeaderPattern = /^###\s+#(\d+)\s+[–-]\s+(.*)/;

    for (const line of lines) {
        const match = line.match(cardHeaderPattern);
        if (match) {
            if (currentCard) {
                currentCard.content = currentContent.join('\n').trim();
                cards.push(currentCard);
            }

            currentCard = {
                id: match[1],
                title: match[2].trim(),
                content: ''
            };
            currentContent = [];
        } else if (line.trim() === '---') {
            continue;
        } else if (currentCard) {
            currentContent.push(line);
        }
    }

    if (currentCard) {
        currentCard.content = currentContent.join('\n').trim();
        cards.push(currentCard);
    }

    return {
        title: moduleTitle,
        cards: cards
    };
}

function generateTsFile() {
    console.log(`Checking input directory: ${INPUT_DIR}`);
    if (!fs.existsSync(INPUT_DIR)) {
        console.error(`Input directory not found: ${INPUT_DIR}`);
        return;
    }
    console.log("Directory exists. Reading files...");

    const files = fs.readdirSync(INPUT_DIR)
        .filter(f => f.startsWith('module') && f.endsWith('.md'));

    // Sort files numerically
    files.sort((a, b) => {
        const numA = parseInt(a.match(/module(\d+)/)[1]);
        const numB = parseInt(b.match(/module(\d+)/)[1]);
        return numA - numB;
    });

    const modules = [];

    for (const filename of files) {
        const filePath = path.join(INPUT_DIR, filename);
        console.log(`Processing ${filename}...`);
        const moduleData = parseModule(filePath);
        
        const moduleNum = filename.match(/module(\d+)/)[1];

        modules.push({
            id: moduleNum,
            title: moduleData.title,
            cards: moduleData.cards
        });
    }

    const tsContent = `export interface Flashcard {
  id: string;
  title: string;
  content: string;
}

export interface FlashcardModule {
  id: string;
  title: string;
  cards: Flashcard[];
}

export const flashcards: FlashcardModule[] = ${JSON.stringify(modules, null, 2)};
`;

    fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf-8');
    console.log(`Successfully generated ${OUTPUT_FILE}`);
}

generateTsFile();
