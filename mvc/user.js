var express = require("express");

var router = express.Router();

var usercon=require("./controller.js")

router.post("/register", usercon.reg);

router.get("/home", usercon.hom);


module.exports = router;
