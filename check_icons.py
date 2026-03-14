import os
import re

def check_lucide_icons(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Find all <Icon usages
                # We look for <SomeName ... /> or <SomeName> which aren't standard HTML
                potential_icons = re.findall(r'<([A-Z][a-zA-Z0-9]*)', content)
                
                # Find all imports from lucide-react
                lucide_imports = set()
                # Matches import { A, B as C } from 'lucide-react'
                import_blocks = re.findall(r'import\s+\{([^}]*)\}\s+from\s+[\'"]lucide-react[\'"]', content, re.DOTALL)
                for block in import_blocks:
                    # Split by comma and handle 'as'
                    items = [i.strip() for i in block.split(',')]
                    for item in items:
                        if ' as ' in item:
                            alias = item.split(' as ')[1].strip()
                            lucide_imports.add(alias)
                        elif item:
                            lucide_imports.add(item)
                
                # Check each potential icon
                for icon in set(potential_icons):
                    # Filter out non-icon components
                    if icon in ['Link', 'Image', 'Fragment', 'MetricHeader', 'Column', 'HeaderMetric', 'MetricCard', 'SidebarItem', 'Step', 'StatusBadge', 'TaskCard', 'LegalLayout', 'Navbar', 'Footer', 'WhatsAppButton']:
                        continue
                    
                    # If it's not in lucide_imports and not defined/imported elsewhere
                    if icon not in lucide_imports:
                        # Check if defined in file
                        if not re.search(r'(const|function|class)\s+' + icon + r'\b', content):
                             # Check if imported from elsewhere
                             if not re.search(r'import\s+.*' + icon + r'.*from', content, re.DOTALL):
                                 print(f"MISSING ICON/COMPONENT: {icon} in {path}")

if __name__ == "__main__":
    check_lucide_icons('d:/SFFALCON 1.0.1/sffalcon/app/servicios')
