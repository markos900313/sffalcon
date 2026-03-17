const fs = require('fs');
const path = require('path');

const basePath = process.cwd();

const filesToUpdate = [
  {
    path: 'app/servicios/aplicaciones-moviles/page.tsx',
    importStr: "import { MobilePremiumCard } from '@/components/servicios/MobilePremiumCard';\n",
    regexMatch: /\{examples\.map\([\s\S]*?\}\)\}\s*(?=<\/div>\s*\{\/\*(?: Tech Stack| Value Proposition))/gm,
    replaceStr: "{examples.map((example, index) => (\n            <MobilePremiumCard key={index} example={example as any} />\n          ))}\n",
  },
  {
    path: 'app/servicios/webs-landing/page.tsx',
    importStr: "import { WebPremiumCard } from '@/components/servicios/WebPremiumCard';\n",
    regexMatch: /\{webExamples\.map\([\s\S]*?\}\)\}\s*(?=<\/div>\s*\{\/\*(?: Technical Brief| Value Proposition))/gm,
    replaceStr: "{webExamples.map((example, index) => (\n            <WebPremiumCard key={index} example={example as any} />\n          ))}\n",
  },
  {
    path: 'app/servicios/saas-paneles/page.tsx',
    importStr: "import { SaaSPremiumCard } from '@/components/servicios/SaaSPremiumCard';\n",
    regexMatch: /\{saasExamples\.map\([\s\S]*?\}\)\}\s*(?=<\/div>\s*\{\/\*(?: Integrated Technical Brief| Value Proposition))/gm,
    replaceStr: "{saasExamples.map((example, index) => (\n            <SaaSPremiumCard key={index} example={example as any} />\n          ))}\n",
  },
  {
    path: 'app/servicios/ia-integrada/page.tsx',
    importStr: "import { AIPremiumCard } from '@/components/servicios/AIPremiumCard';\n",
    regexMatch: /\{aiExamples\.map\([\s\S]*?\}\)\}\s*(?=<\/div>\s*\{\/\*(?: Value Proposition| Funciones principales))/gm,
    replaceStr: "{aiExamples.map((example, index) => (\n            <AIPremiumCard key={index} example={example as any} />\n          ))}\n",
  }
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(basePath, file.path);
  if (!fs.existsSync(fullPath)) {
    console.error('File not found:', fullPath);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');

  // Add import if not present
  if (!content.includes(file.importStr)) {
    const importMatch = content.match(/import.*?from.*?;\n/g);
    if (importMatch && importMatch.length > 0) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + file.importStr);
    }
  }

  // Find map block using a simpler regex or indexOf
  const blockStartText = file.regexMatch.toString().split('.')[0].replace('/', '').replace('\\{', '{');
  
  const modifiedContent = content.replace(file.regexMatch, file.replaceStr);
  
  if (modifiedContent === content) {
    console.warn('Map block not found/replaced for:', file.path);
    // fallback string logic
    let startTag = '{examples.map';
    if(file.path.includes('webs-landing')) startTag = '{webExamples.map';
    if(file.path.includes('saas-paneles')) startTag = '{saasExamples.map';
    if(file.path.includes('ia-integrada')) startTag = '{aiExamples.map';
    
    let endTagMatch = '}</div>';
    
    let stIndex = content.indexOf(startTag);
    let techStr = content.indexOf('<!--', stIndex); // Not HTML
    
    console.warn('REGEX Match Fail, trying to inspect around', stIndex, 'for file', file.path);
  } else {
    fs.writeFileSync(fullPath, modifiedContent, 'utf8');
    console.log('Successfully updated:', file.path);
  }
});
