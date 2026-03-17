import os
import re

# Precise Mapping: Where should the button go for each example to NOT overlap?
PLACEMENT_MAP = {
    'apps/ejemplo-1.html': 'right',
    'apps/ejemplo-2.html': 'right',
    'apps/ejemplo-3.html': 'right',
    'ia/ejemplo-1.html': 'right',
    'ia/ejemplo-2.html': 'right',
    'ia/ejemplo-3.html': 'right',
    'saas/ejemplo-1.html': 'right',
    'saas/ejemplo-2.html': 'right',
    'saas/ejemplo-3.html': 'right',
    'webs/ejemplo-1.html': 'right',
    'webs/ejemplo-2.html': 'right',
    'webs/ejemplo-3.html': 'right'
}

def get_button_html(side):
    # Fixed template (no f-strings to avoid curly brace confusion)
    html = """
<div id="sffalcon-back-btn" style="
  position: fixed;
  top: 16px;
  {SIDE}: 16px;
  z-index: 1000000;
  pointer-events: auto;
  line-height: 0;
">
  <a
    href="javascript:void(0)"
    id="back-link"
    title="Cerrar vista previa"
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    "
    onmouseover="
      this.style.background='#2563eb';
      this.style.transform='scale(1.1)';
      this.style.boxShadow='0 0 15px rgba(37, 99, 235, 0.4)';
    "
    onmouseout="
      this.style.background='rgba(15, 23, 42, 0.85)';
      this.style.transform='scale(1)';
      this.style.boxShadow='0 8px 20px rgba(0,0,0,0.3)';
    "
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3.5"
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
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.history.length > 1 && document.referrer !== '') {
          window.history.back();
        } else {
          if (!window.close()) {
            window.location.href = '/';
          }
        }
      });
    }
  })();
</script>
"""
    return html.replace("{SIDE}", side)

def fix_file(rel_path):
    # Handle both forward and back slashes
    norm_path = rel_path.replace('/', os.sep).replace('\\', os.sep)
    abs_path = os.path.join(os.getcwd(), 'public', 'examples', norm_path)
    
    if not os.path.exists(abs_path):
        print(f"Skipping: {abs_path} (Not found)")
        return

    # Look up in placement map using forward slashes
    key = rel_path.replace('\\', '/')
    side = PLACEMENT_MAP.get(key, 'right')
    
    with open(abs_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up ALL versions
    content = re.sub(r'<div id="sffalcon-back-btn".*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*\(function\(\)\s*{\s*const btn = document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)

    # Remove older patterns from earlier iterations
    content = re.sub(r'<!-- BEGIN: NavigationBackBtn -->.*?<!-- END: NavigationBackBtn -->', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- BEGIN: Floating Action Button -->.*?<!-- END: Floating Action Button -->', '', content, flags=re.DOTALL)

    # Inject New Smaller Manual Button
    button_html = get_button_html(side)
    if '</body>' in content:
        content = content.replace('</body>', button_html + '\n</body>')
    else:
        content += button_html

    with open(abs_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed (v5 {side.upper()} Small): {rel_path}")

# Run for all examples
for rel_path in PLACEMENT_MAP.keys():
    fix_file(rel_path)
