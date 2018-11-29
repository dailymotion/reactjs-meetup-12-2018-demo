const express = require('express')
const compression = require('compression')
const fs = require('fs')

const expressApp = express()

expressApp.use(compression())
expressApp.use(express.static(`${__dirname}/../dist`))

const indexContent = fs.readFileSync(`${__dirname}/../dist/index.html`)
expressApp.get(/.*/, (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.send(indexContent)
})

expressApp.listen(3000, () => {
  console.log('server is listening on 3000')
})
