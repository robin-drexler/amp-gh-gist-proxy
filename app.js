const express = require('express');
const app = express();
const fetch = require('node-fetch');

function renderContentMarkup(content) {
  return `
  <html>
    <head>
    <style>body,html {padding: 0; margin:0;}</style>
    </head>
    <body>
        ${content}
        <script>
          window.parent.postMessage({
            sentinel: 'amp',
            type: 'embed-size',
            height: document.body.scrollHeight
          }, '*');
        </script>
    </body>
  
</html>
`;
}

app.get('/', (req, res) => {
  let url = req.query.url;

  if (!url.startsWith('https://gist.github.com/')) {
    res.sendStatus(400);
  }
  url = url + '.pibb';
  fetch(url)
    .then(result => result.text())
    .then((body) => {
      res.send(renderContentMarkup(body))
    });
});


app.listen(3002);
console.log('http://localhost:3002');