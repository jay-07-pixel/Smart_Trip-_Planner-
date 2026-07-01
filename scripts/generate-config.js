const fs = require('fs');
const path = require('path');

const googleKey = (process.env.GOOGLE_API_KEY || '').trim();
const weatherKey = (process.env.WEATHER_API_KEY || '').trim();

const content = `// Auto-generated at build time — do not commit
window.API_CONFIG = {
    GOOGLE_API_KEY: '${googleKey}',
    WEATHER_API_KEY: '${weatherKey}'
};
`;

const outDir = path.join(__dirname, '..', 'js');
const outPath = path.join(outDir, 'config.js');

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, content);

if (!googleKey || !weatherKey) {
    console.warn('WARNING: GOOGLE_API_KEY and/or WEATHER_API_KEY are not set in environment variables.');
} else {
    console.log('Generated js/config.js for deployment.');
}
