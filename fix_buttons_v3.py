import os
import re

directories = [
    'public/examples/apps',
    'public/examples/ia',
    'public/examples/saas',
    'public/examples/webs'
]

# The 10/10 Minimalist Back Button (Circle with Arrow Only)
BACK_BUTTON_HTML = """
<div id="sffalcon-back-btn" style="
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 100000;
  pointer-events: auto;
">
  <a
    href="javascript:void(0)"
    id="back-link"
    title="Volver"
    style="
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.2);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    "
    onmouseover="
      this.style.background='rgba(37, 99, 235, 0.9)';
      this.style.borderColor='rgba(255,255,255,0.3)';
      this.style.transform='scale(1.08)';
      this.style.boxShadow='0 0 20px rgba(37, 99, 235, 0.4)';
    "
    onmouseout="
      this.style.background='rgba(15, 23, 42, 0.85)';
      this.style.borderColor='rgba(255,255,255,0.1)';
      this.style.transform='scale(1)';
      this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.2)';
    "
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 12H5"/>
      <path d="M12 19l-7-7 7-7"/>
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
          window.close() || (window.location.href = '/');
        }
      });
    }
  })();
</script>
"""

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean up ALL known previous patterns (Pills, text buttons, etc)
    # Pattern for the pill button in example-3
    content = re.sub(r'<!-- BEGIN: Floating Action Button -->.*?<!-- END: Floating Action Button -->', '', content, flags=re.DOTALL)
    # Pattern for my previous sffalcon-back-btn
    content = re.sub(r'<div id="sffalcon-back-btn".*?</div>', '', content, flags=re.DOTALL)
    # Pattern for script tags related to the back button
    content = re.sub(r'<script>\s*document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    # General cleanup of anything with "Volver a SFFALCON"
    content = re.sub(r'<a.*?Volver a SFFALCON.*?</a>', '', content, flags=re.DOTALL | re.IGNORECASE)
    # Cleanup for any other fixed buttons that might exist
    content = re.sub(r'<!-- BEGIN: NavigationBackBtn -->.*?<!-- END: NavigationBackBtn -->', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- BEGIN: Navigation Back Link -->.*?<!-- END: Navigation Back Link -->', '', content, flags=re.DOTALL)

    # 2. Inject the new button before </body>
    if '</body>' in content:
        content = content.replace('</body>', BACK_BUTTON_HTML + '\n</body>')
    else:
        content += BACK_BUTTON_HTML

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed: {filepath}")

for d in directories:
    if os.path.exists(d):
        for f in os.listdir(d):
            if f.endswith('.html'):
                fix_file(os.path.join(d, f))
