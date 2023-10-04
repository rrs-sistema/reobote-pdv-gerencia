//Install express server
const express = require('express');
var request = require('request');

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

app.post('http://15.235.55.109:10180/retorno-pagamento/notificao-ipn', urlencodedParser, function (req, res) {
  id = Number(req.query.id);
  topic = req.query.topic;
  var urlPagamento = `http://15.235.55.109:10180/retorno-pagamento/notificao-ipn?topic=${topic}&id=${id}`;
  var options = {
    'method': 'POST',
    'url': urlPagamento,
    'headers': {}
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
  });
  res.end();
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
