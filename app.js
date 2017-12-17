/**
 * Created by futailin on 12/12/17.
 */
var express  = require('express');
var bodyParser = require('body-parser');

var cbmController = require('./controllers/cbmController');

var app = express();


// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// fire controllers
cbmController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');