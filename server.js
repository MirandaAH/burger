// Express
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static('public'));

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Method Override
var methOver = require('method-override');
app.use(methOver('_method'));

// Express Handlebars
var expHbars = require('express-handlebars');
app.engine('handlebars', expHbars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);



app.listen(PORT, function() {
  console.log('Connection Successful');
});
