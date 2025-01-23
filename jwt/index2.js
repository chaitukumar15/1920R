var express = require("express");

var connct=require("../mysql/index.js")

var jwt=require("jsonwebtoken");

var app = express();

app.use(express.json());

app.get("/register", (req, res) => {
  var { username, password, con_pass, email, role,phone_no } = req.body;
  var arr=["7","8","6","9"];
  if (password != con_pass) {
    res.send({
      msg: "hi please check pass and con pass",
    });
  } else if (!email.includes("@gmail.com")) {
    res.send({
      msg: "hi please add valid email",
    });
  } else if(!(phone_no.length==10 && arr.includes(phone_no[0]))) {

    res.send({
        "msg":"check phone number"
    });
  }else{


    var query=`INSERT INTO users_ch (username, password, email, phone_no, role, con_pass)
VALUES (?,?,?,?,?,?)`
connct.query(query,[username, password, con_pass, email, role,phone_no],(err,data)=>{

console.log(err);

    if(err){
        res.send(err.message)
    }else{

        var token =jwt.sign({
            id:data.insertId
        },"abcdefghijkslbsc1234567890")

        res.send({msg:"register successful",
    
    token:token
})
    }
})


    // res.send({
    //     "msg":req.body
    // });
  }

});

app.listen(4008, () => {
  console.log("hi this is server running");
});
