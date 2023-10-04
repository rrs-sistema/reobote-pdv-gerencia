//Install express server
const { log } = require('console');
const express = require('express');
const path = require('path');

var id = 0;
var topic = '';

const app = express();
// Serve only the static files form the dist directory
app.use(express.static('./dist/reobote-pdv-gerencia'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/reobote-pdv-gerencia/' }),
);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/retorno-pagamento', urlencodedParser, function (req, res) {
  id = Number(req.body.id);
  topic = String(req.body.topic);

  res.setHeader('Content-Type', 'application/json');

  console.log('response - JSON :', JSON.stringify({
    body: req.body || null,
    params: req.params || null,
    queryId: req.query.id || null,
    queryName: req.query.name || null
  }));


  console.log('response - id:', id);
  console.log('response - topic:', topic);

  response = {
    id: req.body.id,
    topic: req.body.topic,
  };
  enviarPagamento();
  res.end();
});

const enviarPagamento = () => {
  var urlPagamento = `http://15.235.55.109:10180/retorno-pagamento?topic=${topic}&id=${id}`;

  console.log('CHAMDNO A API DE PAGAMENTO --> ' + urlPagamento);

  app.post(urlPagamento, urlencodedParser, function (req, res) {
    console.log('RETORNO DO PAGAMENTO DA API:', res);
    res.end();
  });
}

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
