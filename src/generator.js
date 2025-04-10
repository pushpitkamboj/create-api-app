
// src/generator.js
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function generateProject({ projectName, language }) {
  const templateDir = path.join(__dirname, `../templates/${language}`);
  const targetDir = path.join(process.cwd(), projectName);
  await fs.copy(templateDir, targetDir);
  console.log(`\n✅ Project '${projectName}' created with ${language.toUpperCase()}!`);
  console.log(`\n📦 Run: cd ${projectName} && npm install\n`);
}
