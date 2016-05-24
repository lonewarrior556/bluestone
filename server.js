var express = require('express');
var _ = require('underscore');

//config variables
process.env.TZ = 'UTC';
var env = process.env.NODE_ENV || 'default';
var config = require('./config/config-' + env);
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');
if (env === 'dev') {  app.locals.pretty = true; }

// Shareing static directories
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

var main = function(req, res){
  res.render('main', { env: env });
}

app.get('/', main);
app.get('/front', main);
app.get('/back', main);


module.exports = app;
