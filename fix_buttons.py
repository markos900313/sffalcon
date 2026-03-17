import os
import re

# Nuevo diseño: solo círculo con flecha, sin texto
new_back_btn = """
<div id="sffalcon-back-btn" style="
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 99999;
  font-family: Inter, -apple-system,
    BlinkMacSystemFont, sans-serif;
">
  <a
    href="javascript:void(0)"
    id="back-link"
    title="Volver"
    style="
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      background: rgba(10, 22, 40, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.15);
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      transition: all 0.2s ease;
    "
    onmouseover="
      this.style.background='rgba(27,79,216,0.95)';
      this.style.borderColor='rgba(27,79,216,0.5)';
      this.style.transform='scale(1.1) translateY(-1px)';
      this.style.boxShadow='0 6px 24px rgba(27,79,216,0.4)';
    "
    onmouseout="
      this.style.background='rgba(10,22,40,0.92)';
      this.style.borderColor='rgba(255,255,255,0.15)';
      this.style.transform='scale(1) translateY(0)';
      this.style.boxShadow='0 4px 20px rgba(0,0,0,0.3)';
    "
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="flex-shrink:0;"
    >
      <path d="M19 12H5"/>
      <path d="M12 19l-7-7 7-7"/>
    </svg>
  </a>
</div>

<script>
  document.getElementById('back-link')
    .addEventListener('click', function(e) {
      e.preventDefault();
      if (window.history.length > 1 &&
          document.referrer !== '') {
        window.history.back();
      } else {
        window.close();
      }
    });
</script>
"""

base_dir = r'd:\SFFALCON 1.0.1\sffalcon\public\examples'
dirs = ['apps', 'ia', 'saas', 'webs']

for d in dirs:
    d_path = os.path.join(base_dir, d)
    if not os.path.exists(d_path): continue
    for f in os.listdir(d_path):
        if f.endswith('.html'):
            filepath = os.path.join(d_path, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Limpiar bloques de botones previos de forma agresiva
            # 1. Bloque de div con id específico
            content = re.sub(r'<div id="sffalcon-back-btn".*?</div>\s*<script>.*?</script>', '', content, flags=re.DOTALL)
            # 2. Bloque de comentarios BEGIN: Back Navigation
            content = re.sub(r'<!--\s*BEGIN:\s*Back\s*Navigation.*?END:\s*Back\s*Navigation\s*-->', '', content, flags=re.DOTALL)
            # 3. Bloque de comentarios BEGIN: Back Button
            content = re.sub(r'<!--\s*BEGIN:\s*Back\s*Button.*?END:\s*Back\s*Button\s*-->', '', content, flags=re.DOTALL)
            # 4. Cualquier etiqueta <a> que tenga la clase back-button o contenga "Volver a SFFALCON"
            content = re.sub(r'<a[^>]*class="[^"]*(?:back-button|back_button)[^"]*"[^>]*>.*?</a>', '', content, flags=re.DOTALL)
            content = re.sub(r'<a[^>]*data-purpose="return-link"[^>]*>.*?</a>', '', content, flags=re.DOTALL)
            # 5. Estilos inline previos
            content = re.sub(r'\.back-button\s*{[^}]*}', '', content, flags=re.DOTALL)
            
            # Injectar nueva flecha minimalista antes de </body>
            if '</body>' in content:
                content = content.replace('</body>', f'{new_back_btn}\n</body>')
            else:
                content += new_back_btn
                
            # Limpieza final de espacios dobles
            content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
            
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
                
            print(f"Boton circular actualizado: {filepath}")
