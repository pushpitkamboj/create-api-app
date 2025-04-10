// src/utils/validateProjectName.js
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export function validateProjectName(input) {
  // Trim whitespace to handle spaces at beginning/end
  const trimmedInput = input.trim();
  
  // Check if project name is empty after trimming
  if (trimmedInput.length === 0) {
    return 'Project name cannot be empty';
  }
  
  // Check for valid package name (no spaces, valid npm package name)
  if (!/^[a-zA-Z0-9_-]+$/.test(trimmedInput)) {
    return `Project name can only include letters, numbers, underscores and hyphens`;
  }
  
  // Check if name starts with a number (not ideal for some contexts)
  if (/^[0-9]/.test(trimmedInput)) {
    return `Project name should not start with a number`;
  }
    // Check if directory already exists
  const targetDir = path.join(process.cwd(), trimmedInput);
  if (fs.existsSync(targetDir)) {
    return `Directory ${chalk.cyan(trimmedInput)} already exists`;
  }
  
  // Return the trimmed input if all validations pass
  return trimmedInput;
}
