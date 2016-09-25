var express = require('express');
var bodyParser = require('body-parser');
var SwaggerExpress = require('swagger-express-mw');

var app = express();

var config = {
  appRoot: __dirname, // swagger default config
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./api/controllers/router'));

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  swaggerExpress.register(app);
  app.listen(4321);
  console.log('Started api server at port 4321...');
});