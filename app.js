var express  = require('express');
var app = express();
var routes = require("./routes/index.js");
var todorouter = require("./routes/todo.js");
var projroute = require("./routes/projects.js");
app.use("/", routes);
app.use("/todo", todorouter);
app.use("/projects", projroute);

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

app.use(function(req, res){
    res.status(404).render('404.ejs',{title:"404 not found"});
});

app.listen(3000);
console.log("Listening to port 3000"); 
