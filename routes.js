//imports do express
const express = require('express')
const route = express.Router()
const path = require('path')

//imports de arquivos do projeto
const homeController = require('./src/controllers/homeController')
const {createController, escrevePartida} = require('./src/controllers/createController')


route.get('/', homeController)
route.get('/create', createController)
route.post('/create/partida', escrevePartida)

module.exports = route
  