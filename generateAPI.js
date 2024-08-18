const fs = require('fs');
const path = require('path');

const loadPlugins = () => {
  const pluginsDir = path.join(__dirname, 'plugins');
  const files = fs.readdirSync(pluginsDir);
  return files.map(file => {
    const content = fs.readFileSync(path.join(pluginsDir, file));
    return JSON.parse(content);
  });
};

const generateAPI = () => {
  const plugins = loadPlugins();
  const outputPath = path.join(__dirname, 'api', 'plugins.json');
  fs.writeFileSync(outputPath, JSON.stringify(plugins, null, 2));
};

generateAPI();
