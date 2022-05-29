const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const request = require('./util/request')
const cache = require('./util/apicache').middleware
const { cookieToJson } = require('./util/index')
const fileUpload = require('express-fileupload')
const axios = require('axios');

const app = express()

const isDeploy = process.argv[2] === '--deploy';

if (isDeploy) {
  app.use(express.static('dist'));
  app.use(express.static('musicDir'));
}

// CORS & Preflight request
app.use((req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': isDeploy ? 'http://124.220.165.139' : req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
    })
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next()
})

// cookie parser
app.use((req, res, next) => {
  req.cookies = {}
    ; (req.headers.cookie || '').split(/\s*;\s*/).forEach((pair) => {
      let crack = pair.indexOf('=')
      if (crack < 1 || crack == pair.length - 1) return
      try {
        req.cookies[
          decodeURIComponent(pair.slice(0, crack)).trim()
        ] = decodeURIComponent(pair.slice(crack + 1)).trim()
      } catch (e) {
        // console.log(e);
      }
    })
  next()
})

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(fileUpload())

// cache
app.use(cache('2 minutes', (req, res) => res.statusCode === 200));

// getMusic
app.use('/getMusicUrl', async (req, res) => {
  const { id } = req.query;
  const uRes = await axios({
    url: `https://music.163.com/song/media/outer/url?id=${id}`,
    maxRedirects: 0,
  }).catch((err) => {
    const { location } = err.response.headers;
    if (location) {
      res.json({ error: false, url: location });
    } else {
      res.json({ error: true, url: '' });
    }
  });

  console.log('headers', uRes.headers);
  console.log('data', uRes.data);

  res.json({ error: true, url: '' });

  // fs.access(path.join(__dirname, `../musicDir/${id}.mp3`), async (err) => {
  //   // file exist
  //   if (!err) {
  //     res.json({ error: false, url: `/${id}.mp3` });
  //     return;
  //   }

  //   const uRes = await axios({
  //     url: `https://music.163.com/song/media/outer/url?id=${id}`,
  //     responseType: 'arraybuffer'
  //   }).catch((err) => {
  //     console.log('getMusicError', err);
  //     return null;
  //   })

  //   if (uRes && uRes.headers['content-type'].indexOf('audio/') >= 0) {
  //     fs.writeFileSync(path.join(__dirname, `../musicDir/${id}.mp3`), uRes.data);
  //     res.json({ error: false, url: `/${id}.mp3` });
  //   } else {
  //     res.json({ error: true, url: '' });
  //   }
  // });
});

// router
const special = {
  'daily_signin.js': '/daily_signin',
  'fm_trash.js': '/fm_trash',
  'personal_fm.js': '/personal_fm',
}

fs.readdirSync(path.join(__dirname, 'module'))
  .reverse()
  .forEach((file) => {
    if (!file.endsWith('.js')) return
    let route =
      file in special
        ? special[file]
        : '/' + file.replace(/\.js$/i, '').replace(/_/g, '/')
    let question = require(path.join(__dirname, 'module', file))

    app.use(route, (req, res) => {
      if (typeof req.query.cookie === 'string') {
        req.query.cookie = cookieToJson(req.query.cookie)
      }
      let query = Object.assign(
        {},
        { cookie: req.cookies },
        req.query,
        req.body,
        req.files,
      )

      question(query, request)
        .then((answer) => {
          console.log('[OK]', decodeURIComponent(req.originalUrl))
          res.append('Set-Cookie', answer.cookie)
          res.status(answer.status).send(answer.body)
        })
        .catch((answer) => {
          console.log('[ERR]', decodeURIComponent(req.originalUrl), {
            status: answer.status,
            body: answer.body,
          })
          if (answer.body.code == '301') answer.body.msg = '需要登录'
          res.append('Set-Cookie', answer.cookie)
          res.status(answer.status).send(answer.body)
        })
    })
  });

if (isDeploy) {
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'), {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  });
}

const port = process.env.PORT || 4101
const host = process.env.HOST || ''

app.server = app.listen(port, host, () => {
  console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
})

module.exports = app
