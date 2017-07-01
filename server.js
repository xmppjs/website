const express = require('express')
const next = require('next')
const fs = require('fs')
const promisify = require('util').promisify
const path = require('path')
const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/api/docs/:id', (req, res, next) => {
    readFile(`./xmpp.js/docs/${req.params.id}.md`, 'utf8')
      .then(data => {
        res.send(data)
      })
      .catch(next)
  })

  server.get('/api/packages/', (req, res, next) => {
    readdir('./xmpp.js/packages/')
      .then((filenames) => {
        res.json(filenames.filter(filename => filename !== 'node_modules'))
      })
      .catch(next)
  })

  server.get('/api/plugins/', (req, res, next) => {
    readdir('./xmpp.js/packages/plugins/')
      .then((filenames) => {
        res.json(filenames.filter(filename => !filename.includes('.') && filename !== 'node_modules'))
      })
      .catch(next)
  })

  server.get('/api/packages/:id', (req, res, next) => {
    Promise.all([
       readFile(`./xmpp.js/packages/${req.params.id}/package.json`, 'utf8').then(data => JSON.parse(data)),
       readFile(`./xmpp.js/packages/${req.params.id}/README.md`, 'utf8').catch((err) => {
         if (err.code === 'ENOENT') {
           return ''
         } else {
           throw err
         }
       })
    ])
    .then(([package, readme]) => {
      res.json(Object.assign({}, package, {readme, id: req.params.id}))
    })
    .catch(next)
  })

  server.get('/api/plugins/:id', (req, res, next) => {
    Promise.all([
       readFile(`./xmpp.js/packages/plugins/${req.params.id}/README.md`, 'utf8').catch((err) => {
         if (err.code === 'ENOENT') {
           return ''
         } else {
           throw err
         }
       })
    ])
    .then(([readme]) => {
      res.json(Object.assign({}, {readme, id: req.params.id}))
    })
    .catch(next)
  })

  server.get('/packages/:id', (req, res) => {
    return app.render(req, res, '/package', {
      id: req.params.id
    })
  })

  server.get('/plugins/:id', (req, res) => {
    return app.render(req, res, '/plugin', {
      id: req.params.id
    })
  })

  server.get('*', (req, res) => {
    req.url = req.url.replace(/\/$/, '')
    if (req.url == "") { req.url = '/' }
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
