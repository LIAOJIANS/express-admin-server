
const express = require('express')
const app = express()
const  bodyParser = require('body-parser')

const inderRouter = require('./router/index')

const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', inderRouter)

const serve = app.listen('3000', function () {
  const { address, port } = serve.address()
  console.log('启动了' + port)
})
