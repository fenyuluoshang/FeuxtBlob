const fs = require('fs')
if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data')
}
var NodeRSA = require('node-rsa')
if (!fs.existsSync('./key') || !fs.existsSync('./key/admin') || !fs.existsSync('./key/admin.pub')) {
  var key = new NodeRSA({
    b: 2048
  });
  fs.mkdirSync('./key')
  fs.writeFileSync('./key/admin', key.exportKey('pkcs8-private-pem'))
  fs.writeFileSync('./key/admin.pub', key.exportKey('pkcs8-public-pem'))
}



const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser');

const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()
const initgit = require('./git/initgit')

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  await initgit()

  apicentter = require('./MainRouter')
  app.use(apicentter)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
