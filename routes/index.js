var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController.js");
router
.route("/")
.get(indexController.HomePage);

router
.route("/about")
.get(indexController.About);

router.get('/mycar/:id', indexController.Mycar);




module.exports = router;