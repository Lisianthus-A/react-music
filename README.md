# React Music
基于React + JavaScript的仿网易云音乐播放器，无需额外服务器，使用两行npm命令即可在本地运行前后端。(页面搭建中)

技术栈: React(hooks) + axios + antd + Sass

## Todo
- [x] 脚手架搭建
- [x] NodeJS代理解决API接口跨域问题
- [ ] 开始撸前端页面
    - [ ] 音乐播放器
        - [x] 开始/暂停
        - [x] 上一首 / 下一首
        - [x] 音量设置
        - [x] 循环模式设置
        - [ ] 播放列表
            - [x] 清空播放列表
            - [x] 删除播放列表中的某首歌
            - [x] 下载
            - [ ] 添加到歌单
        - [x] 歌词展示
            - [x] 歌词随进度滚动
        - [x] 进度条
            - [x] 歌曲播放进度展示
            - [x] 拖动进度
    
    - [x] 发现音乐页面
        - [x] 图片轮播
        - [x] 推荐歌单
        - [x] 最新音乐
    - [ ] 歌单详情页面
        - [x] 歌单信息
        - [ ] 歌曲列表
        - [ ] 评论列表
    - [ ] 歌曲详情页面
    - [ ] 私人FM页面
    - [ ] 视频页面

## 安装
```
$ git clone https://github.com/Lisianthus-A/react-music.git

$ npm install
```

## 运行
首先把后台跑起来
```
$ npm run server
```
然后启动前端，用浏览器访问`http://localhost:4000`。
```
$ npm run start
```
前端默认运行在4000端口，后台在4001端口

可在`./config/webpack.dev.config.js`和`./server/app.js`中修改默认端口。

## API接口
API来自[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

[API文档](https://binaryify.github.io/NeteaseCloudMusicApi)

## License
[MIT License](http://opensource.org/licenses/MIT)