// src/utils/getUserPkgManager.js
export function getUserPkgManager() {
  // Try to detect which package manager was used to run the create command
  const userAgent = process.env.npm_config_user_agent;

  if (userAgent) {
    if (userAgent.startsWith('yarn')) {
      return 'yarn';
    } else if (userAgent.startsWith('pnpm')) {
      return 'pnpm';
    } else if (userAgent.startsWith('bun')) {
      return 'bun';
    }
  }
  
  // Default to npm
  return 'npm';
}
