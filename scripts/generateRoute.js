const fs = require("fs");
const path = require("path");

// 需要跳过的文件夹名
const ignoreDirNames = ["components", "component", "utils", "util"];

const spaceCount = 4;
const tab = (num = 1) => " ".repeat(spaceCount * num);

let routes = "export default [";

// 深度优先搜索
const dfs = (dir) => {
    const dirPath = path.join(__dirname, dir);
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    files.forEach((file) => {
        const fileName = file.name;
        if (file.isDirectory()) {
            // 跳过指定名称的文件夹
            if (ignoreDirNames.includes(fileName.toLocaleLowerCase())) {
                return;
            }
            dfs(`${dir}/${fileName}`);
        } else if (file.isFile()) {
            if (fileName.toLocaleLowerCase() === "index.tsx") {
                routes += `\n${tab()}{\n`;
                routes += `${tab(2)}path: "${dir.slice(12) || "/"}",\n`;
                routes += `${tab(2)}component: () => import("./pages${dir.slice(12)}")\n${tab()}},`;
            }
        }
    });
};

dfs("../src/pages");
routes += "\n];";
fs.writeFileSync(path.join(__dirname, "../src/routes.tsx"), routes);
