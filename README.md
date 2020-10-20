# React Music
基于React + JavaScript的仿网易云音乐播放器，无需额外服务器，使用两行npm命令即可在本地运行前后端。(页面搭建中)

技术栈: React(hooks) + axios + antd + Sass

## Todo
- [x] 脚手架搭建
- [x] NodeJS代理解决API接口跨域问题
- [ ] 开始撸前端页面


## 安装
```
$ git clone https://github.com/Lisianthus-A/react-music.git

$ npm install
```

## 运行
首先把后台跑起来
```
npm run server
```
然后启动前端，用浏览器访问`http://localhost:4000`。
```
npm run start
```
前端默认运行在4000端口，后台在4001端口

可在`./config/webpack.dev.config.js`和`./server/app.js`中修改默认端口。

## API接口
API来自[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

[API文档](https://binaryify.github.io/NeteaseCloudMusicApi)

## License
[MIT License](http://opensource.org/licenses/MIT)