var express = require("express");

var connection = require("./index.js");
var app = express();

app.get("/users", (req, res) => {


    // seperation of concerns ->



    // html css js -> indexedDB.html
    // html ->
    // csss
    // js  

// va;lidation logic

// controller logics 
    console.log(req.query);    
    var limit=req.query.cat ? Number(req.query.limit):43;
    var offset=req.query.order ? Number(req.query.offset):0;
    console.log(limit , offset);
    
    // data logic 

    // model logics 
    var queyy=`SELECT * FROM dummy.products where category=? order by price ?`
    connection.query(queyy,[limit,offset],(err,data)=>{

        if(err){
            res.send({
                msg:err.message,
                statuscode:400
            })
        }else{
            res.send({
                msg:"success",
                res:data,
                statuscode:400
            })
        }
    })
//   res.send("hi this are users");
});

app.listen(3003, () => {
  console.log("server has sarted ");
});
