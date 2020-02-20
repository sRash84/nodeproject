var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController.js");
router
.route("/")
.get(indexController.HomePage);


module.exports = router;