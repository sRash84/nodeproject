var mongoose = require('mongoose');

 //Connect to the database
mongoose.connect("mongodb+srv://test:test@cluster0-c2fde.mongodb.net/firstproj?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });

//Create schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item : String
});

var Todo = mongoose.model('Todolist', todoSchema);

module.exports.list = function(req, res){    
    //get data from mongodb and pass it to view
    Todo.find({}, function(err, data){
        if(err) throw err;
        res.render('todocontroller/todo', 
        {
            todos: data, 
            title:"Basic todo App"
        });
    });
}

module.exports.postTodo = function(req, res){    
    var newTodo = Todo(req.body).save(function(err, data){
        if(err) throw err;
        console.log("Item added successfully");
        res.json(data);
    })
}

module.exports.deletePost = function(req, res){
    console.log(req.params.item);
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
        if(err) throw err;
        res.json(data);
    });
}