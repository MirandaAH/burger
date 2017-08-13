var orm = require('./config/orm.js')
// Express
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static('public'));

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(methodOverride('_method'));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Method Override
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

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
