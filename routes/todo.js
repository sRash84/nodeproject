var express = require('express');
var todoroute = express.Router();
var todoController = require("../controllers/todoController.js");
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({extended:false});

todoroute.get("/", todoController.list);
todoroute.post("/",urlencodedparser, todoController.postTodo);
todoroute.delete("/:item", todoController.deletePost);

module.exports = todoroute;