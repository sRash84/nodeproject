var express  = require('express');
var app = express();
var routes = require("./routes/index.js");
var todorouter = require("./routes/todo.js");

app.use("/", routes);
app.use("/todo", todorouter);

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

app.use(function(req, res){
    res.status(404).render('404.ejs');
});

app.listen(3000);
console.log("Listening to port 3000"); 
