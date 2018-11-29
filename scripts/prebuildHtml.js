const fs = require('fs')

const htmlTemplate = require('./htmlTemplate')

const html = htmlTemplate()
fs.writeFileSync(`${__dirname}/../dist/index.html`, html, 'utf-8')

