import os

def escape_content(text):
    text = text.replace('\\', '\\\\')
    text = text.replace('`', '\\`')
    text = text.replace('${', '\\${')
    return text

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = r'd:\000_portfolio_2025\Portfolio\101_Credit Risk Regulatory Capstone'
curriculum_path = os.path.join(base_dir, 'data', 'curriculum.ts')
draft_path = os.path.join(base_dir, 'content_drafts', 'Module_13.md')

print(f"Reading draft from {draft_path}...")
draft_content = read_file(draft_path)
escaped_content = escape_content(draft_content)

print(f"Reading curriculum from {curriculum_path}...")
curriculum = read_file(curriculum_path)

target_start = 'content: "TEMPORARY_FIX_FOR_DEBUGGING"'
start_idx = curriculum.find(target_start)

if start_idx == -1:
    print("Error: Target string not found.")
    exit(1)

# Find the next closing brace `            }` (12 spaces)
# We search starting from start_idx
# But we need to be careful. The content object ends with `            }`.
# The content array ends with `          ]`.
# The section object ends with `        }`.

# Let's look for `            }` specifically.
end_marker = '            }'
end_idx = curriculum.find(end_marker, start_idx)

if end_idx == -1:
    print("Error: End marker not found.")
    exit(1)

# We want to replace everything from start_idx up to end_idx (exclusive).
# The new content should be:
# content: `...`
# followed by a newline (to match the indentation of the closing brace).

# Wait, `end_idx` points to the start of `            }`.
# So we replace up to `end_idx`.
# But we need to make sure we don't eat the newline before `            }` if we want it.
# Actually, we can just output `content: `...`\n`.

new_content = f'content: `{escaped_content}`\n'

print(f"Replacing from {start_idx} to {end_idx}...")
new_curriculum = curriculum[:start_idx] + new_content + curriculum[end_idx:]

print(f"Writing back to {curriculum_path}...")
write_file(curriculum_path, new_curriculum)
print("Done.")
