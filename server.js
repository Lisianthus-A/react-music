/* =========== 配置 ============ */
const config = {
    // 运行端口
    // 端口被占用时会自动寻找下一个端口
    port: 4100,
    // 自动打开浏览器
    openBrowser: true,
};

/* =========== 以下内容无需更改 ============ */
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { exec } = require('child_process');

const { port, openBrowser } = config;

const mapContentType = {
    htm: 'text/html',
    html: 'text/html',
    js: 'text/javascript',
    css: 'text/css',
    json: 'application/json',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    mp3: 'audio/mpeg',
    pdf: 'application/pdf',
    woff: 'font/woff',
    woff2: 'font/woff2',
    ttf: 'font/ttf',
    svg: 'image/svg+xml',
    txt: 'text/plain',
    xml: 'application/xml',
    tar: 'application/x-tar',
    sh: 'application/x-sh'
};

const sendFile = (req, res) => new Promise(resolve => {
    let result;
    const pathname = req.url.match(/[\/\w\-\.%!_:\(\)]+/)?.[0] || '';
    // 文件后缀
    const suffix = pathname.match(/\.(\w+)$/)?.[1];
    // 文件路径
    // 后缀为 undefined 时说明 pathname 类似 /aaa/bbb，应读取 index.html
    const filePath = decodeURIComponent(
        path.join(__dirname, suffix ? pathname : 'index.html')
    );
    // Content-Type
    const type = mapContentType[suffix] || 'text/html';

    try {
        res.statusCode = 200;
        res.setHeader("Content-Type", type);
        const encoding = req.headers["accept-encoding"];
        const readStream = fs.createReadStream(filePath);
        if (encoding && encoding.includes('gzip')) {  // gzip
            res.setHeader("Content-Encoding", 'gzip');
            const compress = zlib.createGzip();
            readStream.pipe(compress).pipe(res);
        } else if (encoding && encoding.includes('deflate')) {  // deflate
            res.setHeader("Content-Encoding", 'deflate');
            const compress = zlib.createDeflate();
            readStream.pipe(compress).pipe(res);
        } else {  // 不压缩
            readStream.pipe(res);
        }
        result = true;
    } catch (e) {
        res.statusCode = 404;
        result = false;
        res.end();
    }
    resolve(result);
});

const server = http.createServer((req, res) => {
    const { url } = req;
    sendFile(req, res).then(result => {
        // result && console.log(`[Server OK]: ${url}`);
        !result && console.log(`[Server ERR]: ${url}`);
    });
});

// 查看端口是否可用
const isPortUseable = (p) => {
    return new Promise(resolve => {
        const s = http.createServer().listen(p);
        // 端口可用
        s.on('listening', () => {
            s.close();
            resolve(true);
        });
        // 端口不可用
        s.on('error', () => {
            resolve(false);
        });
    });
}

const listen = async () => {
    // 在 port ~ port + 10 中寻找可用的端口进行监听
    for (let p = port; p <= port + 10; ++p) {
        const isUseable = await isPortUseable(p);
        if (isUseable) {
            server.listen(p, (err) => {
                err && console.log(err);
                !err && console.log(`server runing on port: ${p}`);
                !err && openBrowser && exec(`start http://localhost:${p}`);
            });
            return;
        }
    }

    console.error(`Err: Port ${port} ~ ${port + 10} are disabled!`);
}

listen();