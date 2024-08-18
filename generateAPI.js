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
  const apiDir = path.join(__dirname, 'api');

  // 如果api目录不存在，则创建它
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir);
  }

  const outputPath = path.join(apiDir, 'plugins.json');
  fs.writeFileSync(outputPath, JSON.stringify(plugins, null, 2));
};

generateAPI();
