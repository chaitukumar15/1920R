

var express=require("express");


var router=express.Router();

router.post("/register",(req,res)=>{
    res.send("hi this is register api auth ")
})


router.get("/home",(req,res)=>{
    res.send("hi this is home api auth")
})


module.exports=router;
