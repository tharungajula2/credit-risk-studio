import os
import sys

def escape_content(text):
    text = text.replace('\\', '\\\\')
    text = text.replace('`', '\\`')
    text = text.replace('${', '\\${')
    return text

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {path}: {e}")
        sys.exit(1)

def write_file(path, content):
    try:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f"Error writing {path}: {e}")
        sys.exit(1)

base_dir = os.getcwd()
draft_path = os.path.join(base_dir, 'content_drafts', 'Module_13.md')
output_path = os.path.join(base_dir, 'escaped.txt')

print(f"Base dir: {base_dir}")
print(f"Reading draft from {draft_path}...")
sys.stdout.flush()

if not os.path.exists(draft_path):
    print(f"Draft file not found at {draft_path}")
    sys.exit(1)

draft_content = read_file(draft_path)
print(f"Read {len(draft_content)} chars.")
sys.stdout.flush()

escaped_content = escape_content(draft_content)

print(f"Writing escaped content to {output_path}...")
sys.stdout.flush()
write_file(output_path, escaped_content)
print("Done.")
sys.stdout.flush()
