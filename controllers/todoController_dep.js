var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//Connect to the database
mongoose.connect("mongodb+srv://test:test@cluster0-c2fde.mongodb.net/firstproj?retryWrites=true&w=majority");

//Create schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item : String
});

var Todo = mongoose.model('Todolist', todoSchema);

/*
This was for illustration only
var itemOne = Todo({item:"Get Milk"}).save(function(err){
    if(err) throw err;
    console.log("Item Saved");
})*/

/*
dummy data
var data = [
    {item:"Get Milk"},
    {item:"Walk Dog"},
    {item:"Do some coding"}
];*/

var urlencodedparser = bodyParser.urlencoded({extended:false});


module.exports = function(app){
    app.get('/todo', function(req, res){
        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todocontroller/todo', {todos: data});
        });
    });

    app.post('/todo',urlencodedparser,  function(req, res){
        //get data from view and insert to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            console.log("Item added successfully");
            res.json(data);
        })
        //data.push(req.body);
    });

    app.delete('/todo/:item', function(req, res){
        /*data = data.filter(function(todo){
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
        res.json(data);*/

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });
}