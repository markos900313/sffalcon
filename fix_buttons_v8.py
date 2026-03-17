import os
import re

# Redirection Mapping for 10/10 UX
# We use absolute URLs to ensure consistency
REDIRECT_MAP = {
    'apps': '/servicios/aplicaciones-moviles',
    'ia': '/servicios/ia-integrada',
    'saas': '/servicios/saas-paneles',
    'webs': '/servicios/webs-landing'
}

def get_button_html(category):
    fallback_url = REDIRECT_MAP.get(category, '/')
    
    # Template without f-strings to avoid JS curly brace conflicts
    html_template = """
<style>
  @media (min-width: 1024px) {
    #sffalcon-back-btn {
      display: none !important;
    }
  }
</style>
<div id="sffalcon-back-btn" style="
  position: fixed;
  top: 12px;
  right: 12px;
  z-index: 1000000;
  pointer-events: auto;
  line-height: 0;
  display: flex;
">
  <button
    id="back-link"
    title="Cerrar vista previa"
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #FFFFFF;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    "
    onmouseover="this.style.background='#2563eb'; this.style.transform='scale(1.1)';"
    onmouseout="this.style.background='rgba(15, 23, 42, 0.9)'; this.style.transform='scale(1)';"
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  </button>
</div>

<script>
  (function() {
    const btn = document.getElementById('back-link');
    const targetUrl = "REPLACEMENT_URL";
    
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // 1. If we are in a new tab (common for target="_blank"), 
        // trying to close it is the most natural behavior.
        // We identify it if history length is 1 or if we have an opener.
        try {
          if (window.opener || window.history.length === 1) {
            window.close();
          }
        } catch (err) {}

        // 2. FORCED REDIRECTION:
        // This is the "Perfection" part. We NEVER use window.history.back()
        // which can lead to other examples if the user clicked around.
        // We always go back to the source SFFALCON category.
        window.location.replace(targetUrl);
      });
    }
  })();
</script>
"""
    return html_template.replace("REPLACEMENT_URL", fallback_url)

def fix_file(root_dir, category, filename):
    abs_path = os.path.join(root_dir, 'public', 'examples', category, filename)
    if not os.path.exists(abs_path):
        print(f"Skipping: {abs_path} (Not found)")
        return

    with open(abs_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Aggressive Cleanup of ALL previous versions
    content = re.sub(r'<style>\s*@media \(min-width: 1024px\).*?#sffalcon-back-btn.*?display: none !important;.*?}\s*</style>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div id="sffalcon-back-btn".*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*\(function\(\)\s*{\s*const btn = document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- BEGIN: NavigationBackBtn -->.*?<!-- END: NavigationBackBtn -->', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- BEGIN: Floating Action Button -->.*?<!-- END: Floating Action Button -->', '', content, flags=re.DOTALL)

    # Inject Final v8 Button
    button_html = get_button_html(category)
    if '</body>' in content:
        content = content.replace('</body>', button_html + '\n</body>')
    else:
        content += button_html

    with open(abs_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed (v8 {category.upper()} Perfection): {filename}")

root = os.getcwd()
for cat in REDIRECT_MAP.keys():
    cat_path = os.path.join(root, 'public', 'examples', cat)
    if os.path.exists(cat_path):
        for f in os.listdir(cat_path):
            if f.endswith('.html'):
                fix_file(root, cat, f)
