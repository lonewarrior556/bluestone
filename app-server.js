const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.locals.pretty = true;

// Shareing static directories
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

let main = function(req, res){
  res.render('main');
}

app.get('/', main);
app.get('/list', main);
app.get('/details*', main);


app.get('*', function(req, res){
  res.send('<div>404</div>', 404);
});

module.exports = app;
