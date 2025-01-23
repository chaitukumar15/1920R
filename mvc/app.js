
var express=require("express");

var router=require("./index.js")

var router1=require("./user.js")

var app= express()

app.use("/auth",router);

app.use("/user",router1);


app.get("/",(req,res)=>{

    res.send("hi this is root page")

})


app.listen(4007,()=>{
    console.log("hi this is server");
    
})