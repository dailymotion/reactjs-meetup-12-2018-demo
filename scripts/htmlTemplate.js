module.exports = (content = '', scripts = '') => `
  <!DOCTYPE html>
  <html>
  <head>
    <script>window.performance.mark('html_parse_start')</script>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dailymotion</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div id="root">${content}</div>

    <script src="https://api.dmcdn.net/all.js"></script>
    ${scripts}
  </body>
  </html>
`
