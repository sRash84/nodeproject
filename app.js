var express  = require('express');
var todoController = require('./controllers/todoController');

var app = express();

var routes = require("./routes/index.js");

app.use("/", routes);


//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

app.listen(3000);
console.log("Listening to port 3000"); 
