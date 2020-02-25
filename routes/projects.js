var express = require('express');
var route = express.Router();
var projController = require("../controllers/projectsController.js");
var bodyParser = require('body-parser');
//var urlencodedparser = bodyParser.urlencoded({extended:false});

route.get("/", projController.list);
/* route.post("/",urlencodedparser, projController.postTodo);
route.delete("/:item", projController.deletePost); */

module.exports = route;