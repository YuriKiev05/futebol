//imports do express
const express = require('express')
const route = express.Router()
const path = require('path')

//imports de arquivos do projeto
const homeController = require('./src/controllers/homeController')    


route.get('/', homeController)

module.exports = route
  