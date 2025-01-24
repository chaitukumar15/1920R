var express = require("express");
var app = express();
app.use(express.json())


// app.use(function (req, res, next) {


// var body="";
//     req.on("data",(chunk)=>{

//         body+=chunk
//     })


    
//     req.on("end",()=>{
        
//         req.body=body;
//         next()
//     })


// });

app.get("/", function (req, res) {
  //   console.log(req.body, "bdy ib api");\

  res.send(req.body);
});

app.post("/home", (req, res) => {
    var obj={
        h:res.chaitanya,
        hh:req.ravi
      }
    
      res.send(obj);
});

app.listen(3002, () => {
  console.log("hi started the server");
});
