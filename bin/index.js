#!/usr/bin/env node
import prompts from 'prompts';
import { generateProject } from '../src/generator.js';

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
    }  ]);

  await generateProject(response);
}

// Call the CLI function
runCLI().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
