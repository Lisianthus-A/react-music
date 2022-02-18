const fs = require('fs');
const path = require('path');

// 需要跳过的文件夹名
const ignoreDirNames = ['components', 'component', 'utils', 'util'];

let routes = 'export default [';

// 深度优先搜索
const dfs = (dir) => {
    const dirPath = path.join(__dirname, dir);
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    files.forEach(file => {
        const fileName = file.name;
        if (file.isDirectory()) {
            // 跳过指定名称的文件夹
            if (ignoreDirNames.includes(fileName.toLocaleLowerCase())) {
                return;
            }
            dfs(`${dir}/${fileName}`);
        } else if (file.isFile()) {
            if (fileName.toLocaleLowerCase() === 'index.tsx') {
                routes += '\n    {\n';
                routes += `        path: "${dir.slice(12) || "/"}",\n`;
                routes += `        component: () => import("./pages${dir.slice(12)}")\n    },`;
            }
        }
    });
};

dfs('../src/pages');
routes += '\n];';
fs.writeFileSync(path.join(__dirname, '../src/routes.tsx'), routes);