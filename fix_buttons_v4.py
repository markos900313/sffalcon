import os
import re

directories = [
    'public/examples/apps',
    'public/examples/ia',
    'public/examples/saas',
    'public/examples/webs'
]

# The ELITE v4 Back Button (Top-Right to avoid Logo overlaps)
BACK_BUTTON_HTML = """
<div id="sffalcon-back-btn" style="
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000000;
  pointer-events: auto;
">
  <a
    href="javascript:void(0)"
    id="back-link"
    title="Salir de la vista previa"
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    "
    onmouseover="
      this.style.background='rgba(37, 99, 235, 1)';
      this.style.transform='scale(1.1) rotate(-90deg)';
      this.style.boxShadow='0 0 25px rgba(37, 99, 235, 0.5)';
      this.style.borderColor='rgba(255,255,255,0.4)';
    "
    onmouseout="
      this.style.background='rgba(15, 23, 42, 0.9)';
      this.style.transform='scale(1) rotate(0deg)';
      this.style.boxShadow='0 10px 25px rgba(0,0,0,0.3)';
      this.style.borderColor='rgba(255,255,255,0.15)';
    "
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
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
        // If there's history and it's not a fresh window, go back
        if (window.history.length > 1 && document.referrer !== '') {
          window.history.back();
        } else {
          // If no history, try to close (only works if opened by js) or redirect to home
          if (!window.close()) {
            window.location.href = '/';
          }
        }
      });
    }
  })();
</script>
"""

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up ANY version of the back button (v1, v2, v3)
    content = re.sub(r'<div id="sffalcon-back-btn".*?</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*\(function\(\)\s*{\s*const btn = document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>\s*document\.getElementById\(\'back-link\'\).*?</script>', '', content, flags=re.DOTALL)
    
    # Remove older patterns from earlier iterations
    content = re.sub(r'<!-- BEGIN: NavigationBackBtn -->.*?<!-- END: NavigationBackBtn -->', '', content, flags=re.DOTALL)
    content = re.sub(r'<!-- BEGIN: Floating Action Button -->.*?<!-- END: Floating Action Button -->', '', content, flags=re.DOTALL)

    # Inject the new TOP-RIGHT Exit button
    if '</body>' in content:
        content = content.replace('</body>', BACK_BUTTON_HTML + '\n</body>')
    else:
        content += BACK_BUTTON_HTML

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed (v4 Top-Right): {filepath}")

for d in directories:
    if os.path.exists(d):
        for f in os.listdir(d):
            if f.endswith('.html'):
                fix_file(os.path.join(d, f))
