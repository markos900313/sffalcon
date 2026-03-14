import os
import re

def check_imports(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Find all custom components used in JSX
                components = re.findall(r'<([A-Z][a-zA-Z0-9]*)', content)
                
                for component in set(components):
                    if component in ['Link', 'Image', 'Fragment', 'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'nav', 'footer', 'button', 'ul', 'li', 'a', 'img', 'header', 'aside', 'main', 'form', 'label', 'input', 'select', 'option', 'textarea', 'svg', 'path']:
                        continue
                    
                    # Check if it's imported (case insensitive search for Component in imports)
                    # Use re.DOTALL to match across newlines
                    import_pattern = r'import\s+[^;]*' + component + r'[^;]*from'
                    if re.search(import_pattern, content, re.DOTALL):
                        continue
                    
                    # Check if it's defined in the same file
                    def_pattern = r'(const|function|class)\s+' + component + r'\b'
                    if re.search(def_pattern, content):
                        continue
                        
                    print(f"MISSING: {component} in {path}")

if __name__ == "__main__":
    check_imports('d:/SFFALCON 1.0.1/sffalcon/app/servicios')
