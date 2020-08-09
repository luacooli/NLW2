//server
const express = require('express')
const server = express()

const { pageStudy, pageLanding, pageGiveClasses, saveClasses } = require('./pages')
//nunjucks configuration } (template engine)
const nunjucks = require('nunjucks')

// nunjucks configuration
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server
  //receve data from req.body
  .use(express.urlencoded({ extended: true }))
  //config statics files (css, scripst, images)
  .use(express.static('public'))
  // routes
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/give-classes', saveClasses)
  // start server
  .listen(5509)