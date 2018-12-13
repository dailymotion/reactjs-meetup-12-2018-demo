const fs = require('fs')

const htmlTemplate = require('./htmlTemplate')
const getAppContent = require('../dist/bundle-server')

const wpRuntimeScript = fs.readFileSync(`${__dirname}/../dist/wpruntime.js`)
const criticalScript = fs.readFileSync(`${__dirname}/../dist/critical.js`)

const html = htmlTemplate(getAppContent.default(), `
   <script type="text/javascript">${wpRuntimeScript}</script>
   <script type="text/javascript">${criticalScript}</script>
`)
fs.writeFileSync(`${__dirname}/../dist/index.html`, html, 'utf-8')


