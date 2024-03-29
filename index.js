var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

// Turn on handlebars.
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs.engine({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) { 
    var gen = require('./generate');
    res.render("index", {data: gen(100)});
});

app.listen(app.get('port'), function() {
      console.log('Node app is running on port', app.get('port'));
});


module.exports = app;

