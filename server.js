let express = require('express');
let app = express();

app.use(express.static(__dirname+'/dist/reobote-pdv-gerencia'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/reobote-pdv-gerencia/index.html');
});

app.listen(process.env.PORT || 4200);
