
import prompts from 'prompts';
import { generateProject } from './generator.js';

export async function runCLI() {
  const response = await prompts([
    {
      type: 'select',
      name: 'language',
      message: 'Choose a language',
      choices: [
        { title: 'JavaScript', value: 'js' },
        { title: 'TypeScript', value: 'ts' }
      ]
    },
    {
      type: 'text',
      name: 'projectName',
      message: 'Enter project folder name'
    }
  ]);

  await generateProject(response);
}
