import fs from 'fs';
import path from 'path';

const dirs = ['webs', 'apps', 'saas', 'ia'];
const baseDir = path.join(process.cwd(), 'public', 'examples');

const template = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" 
    content="width=device-width, 
    initial-scale=1.0">
  <title>Ejemplo — SFFALCON</title>
  <style>
    * { margin: 0; padding: 0; 
        box-sizing: border-box; }
    body {
      font-family: Inter, sans-serif;
      background: #0A1628;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      flex-direction: column;
      gap: 16px;
    }
    h1 { 
      color: #1B4FD8; 
      font-size: 24px;
    }
    p { 
      color: #94A3B8; 
      font-size: 14px;
    }
    .btn {
      background: #1B4FD8;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 14px;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <h1>SF FALCÓN</h1>
  <p>Ejemplo en construcción</p>
  <a href="javascript:window.close()" 
     class="btn">
    &larr; Volver
  </a>
</body>
</html>`;

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

dirs.forEach(d => {
  const dirPath = path.join(baseDir, d);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  for (let i = 1; i <= 3; i++) {
    fs.writeFileSync(path.join(dirPath, `ejemplo-${i}.html`), template);
  }
});
console.log('HTML files generated successfully!');
