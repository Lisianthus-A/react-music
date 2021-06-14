// 根据 src/routes 下的文件夹生成路由
const fs = require('fs');
const path = require('path');

const routePath = path.join(process.cwd(), './src/routes');

// 读取文件夹，生成 routes
const routes = fs
    .readdirSync(routePath, { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(item => `/${item.name}`);

// 保存
const fileContent = `export default ${JSON.stringify(routes, null, 4)};`;
fs.writeFileSync(path.join(routePath, 'index.js'), fileContent, { encoding: 'utf-8' });