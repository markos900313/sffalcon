import os
import re

def check_all_identifiers(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Strip comments
                content = re.sub(r'//.*', '', content)
                content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
                
                # Find all potential variable usages (CamelCase)
                # We want things like ArrowLeft, but not inside strings or imports
                # Let's find all identifiers that start with an UpperCase letter
                identifiers = re.findall(r'\b([A-Z][a-zA-Z0-9]*)\b', content)
                
                # Get all defined identifiers
                imported = set(re.findall(r'import\s+.*?\b([A-Z][a-zA-Z0-9]*)\b.*?from', content, re.DOTALL))
                # Also handle { A, B }
                import_blocks = re.findall(r'import\s+\{([^}]*)\}\s+from', content, re.DOTALL)
                for block in import_blocks:
                    items = [i.strip() for i in block.split(',')]
                    for item in items:
                        if ' as ' in item:
                            imported.add(item.split(' as ')[1].strip())
                        else:
                            imported.add(item.split(' ')[0].strip())
                
                defined = set(re.findall(r'(const|function|class|interface|type|enum)\s+\b([A-Z][a-zA-Z0-9]*)\b', content))
                defined_names = {d[1] for d in defined}
                
                # Add React and common globals
                globals_set = {'React', 'Intl', 'Math', 'Date', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Promise', 'Error', 'JSON', 'Map', 'Set', 'Console', 'Link', 'Image'}
                
                for id in set(identifiers):
                    if id in imported or id in defined_names or id in globals_set:
                        continue
                    
                    # Ignore some common false positives
                    if id in ['Boolean', 'Readonly', 'JSX', 'FC', 'Props', 'Client', 'Metric', 'Task', 'initialTasks', 'clientsData', 'plusJakarta', 'inter', 'lora', 'outfit', 'dmSans']:
                        continue
                    
                    if id.isupper() and len(id) > 1: # CONSTANTS are usually fine
                        continue
                        
                    print(f"Potential undefined identifier: {id} in {path}")

if __name__ == "__main__":
    check_all_identifiers('d:/SFFALCON 1.0.1/sffalcon/app/servicios')
