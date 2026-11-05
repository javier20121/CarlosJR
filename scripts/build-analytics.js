import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the @vercel/analytics module
const analyticsPath = path.join(__dirname, '../node_modules/@vercel/analytics/dist/index.mjs');
const analyticsCode = fs.readFileSync(analyticsPath, 'utf-8');

// Create a bundled version that works in browsers
// We'll wrap it in an IIFE and call inject automatically
const bundledCode = `// Vercel Web Analytics - Bundled for browser use
// Auto-generated from @vercel/analytics v2.0.1
${analyticsCode}

// Auto-inject analytics
if (typeof window !== 'undefined') {
  inject();
}
`;

try {
  fs.writeFileSync(path.join(__dirname, '../vercel-analytics.js'), bundledCode);
  console.log('✓ Created vercel-analytics.js bundle');
} catch (error) {
  console.error('Error creating analytics bundle:', error);
  process.exit(1);
}
