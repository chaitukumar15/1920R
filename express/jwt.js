var express=require("express");

var jwt=require("jsonwebtoken");

var app=express();

app.use(express.json())

var jj=function(req,res,next){

    req.ch="jhgfs";
    next()

}

app.get("/j",jj,(req,res)=>{

    res.send(req.ch)
})

app.post("/reg",(req,res)=>{

    console.log(req.body);
    
    var token=jwt.sign({
        user:req.body.user,
        email:req.body.email
    },"abcdefghij12344567890")

res.send(token)

    
})

app.listen(3007,()=>{
    console.log("jjg");
    
})