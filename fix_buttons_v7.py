import os
import re

# Redirection Mapping for 10/10 UX
REDIRECT_MAP = {
    'apps': '/servicios/aplicaciones-moviles',
    'ia': '/servicios/ia-integrada',
    'saas': '/servicios/saas-paneles',
    'webs': '/servicios/webs-landing'
}

def get_button_html(category):
    fallback_url = REDIRECT_MAP.get(category, '/')
    
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
  top: 16px;
  right: 16px;
  z-index: 1000000;
  pointer-events: auto;
  line-height: 0;
  display: flex;
">
  <a
    href="REPLACEMENT_URL"
    id="back-link"
    title="Cerrar vista previa"
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 25px rgba(0,0,0,0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    "
    onmouseover="
      this.style.background='#2563eb';
      this.style.transform='scale(1.1)';
      this.style.boxShadow='0 0 20px rgba(37, 99, 235, 0.5)';
    "
    onmouseout="
      this.style.background='rgba(15, 23, 42, 0.9)';
      this.style.transform='scale(1)';
      this.style.boxShadow='0 8px 25px rgba(0,0,0,0.4)';
    "
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  </a>
</div>

<script>
  (function() {
    const btn = document.getElementById('back-link');
    const fallbackUrl = "REPLACEMENT_URL";
    
    if (btn) {
      btn.addEventListener('click', function(e) {
        // If history is available AND the referrer is from our site, go back
        // Otherwise, allow default link behavior to fallbackUrl
        if (window.history.length > 1 && document.referrer.indexOf(window.location.host) !== -1) {
          e.preventDefault();
          window.history.back();
          
          // Secondary fallback to ensure navigation
          setTimeout(() => {
             if (window.location.pathname.indexOf('/examples/') !== -1) {
                window.location.href = fallbackUrl;
             }
          }, 500);
        }
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

    # Aggressive Cleanup
    content = re.sub(r'<style>\s*@media \(min-width: 1024px\).*?#sffalcon-back-btn.*?display: none !important;.*?}\s*</style>', '', content, flags=re.DOTALL)
    content = re.sub(r'<div id="sffalcon-back-btn".*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*\(function\(\)\s*{\s*const btn = document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    
    # Older patterns
    content = re.sub(r'<!-- BEGIN: NavigationBackBtn -->.*?<!-- END: NavigationBackBtn -->', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- BEGIN: Floating Action Button -->.*?<!-- END: Floating Action Button -->', '', content, flags=re.DOTALL)

    # Inject Final Smart Button
    button_html = get_button_html(category)
    if '</body>' in content:
        content = content.replace('</body>', button_html + '\n</body>')
    else:
        content += button_html

    with open(abs_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed (v7 {category.upper()} Smart Redirect): {filename}")

root = os.getcwd()
for cat in REDIRECT_MAP.keys():
    cat_path = os.path.join(root, 'public', 'examples', cat)
    if os.path.exists(cat_path):
        for f in os.listdir(cat_path):
            if f.endswith('.html'):
                fix_file(root, cat, f)
