var express = require("express");
var bcrypt = require("bcrypt");
var fs = require("fs");
var app = express();
var jwt=require("jsonwebtoken");

// to get the raw data from the body
app.use(express.json());

app.post("/register", (req, res) => {
  var salt = 10;

  var otp = "";
  for (i = 0; i < 4; i++) {
    var data = Math.floor(Math.random() * 10);
    otp += data;
  }

  bcrypt.hash(req.body.password, salt, (err, hash) => {

    var pre="abcdefghijklmn0123456789"
    var token=jwt.sign(req.body,pre)
     

    console.log(hash);
    req.body.password = hash;
    req.body.otp = otp;
    req.body.checkedotp = 0;
    req.body.token=token;

    fs.writeFile(
      "bcrypt/index.json",
      JSON.stringify(req.body),
      "utf-8",
      (err) => {
        if (err) {
          res.send({
            res: "resgsier not successful",
            err: err.message,
            statuscode: 400,
          });
        } else {
          res.send({
            res: "resgsier successful",
            wri:req.body,
            statuscode: 201,
          });
        }
      }
    );

    // res.send(req.body);
  });
});

app.post("/otp", (req, res) => {
  console.log(req.body.otp);

  fs.readFile("bcrypt/index.json", "utf-8", (err, data) => {
    var parseddata = JSON.parse(data);
    console.log(parseddata.otp);

    if (parseddata.otp == req.body.otp) {
      parseddata.checkedotp = 1;
      fs.writeFile("bcrypt/index.json", JSON.stringify(parseddata), "utf-8", (err) => {
        if (err) {
          res.send({
            res: "otp not successful",
            err: err.message,
            statuscode: 400,
          });
        } else {
          res.send("this is otp is correct");
        }
      });
    } else {
      res.send("send valid otp");
    }
  });
});



app.post("/login", (req, res) => {

    const token = req.headers['authorization']?.split(' ')[1]; 

    console.log(token);
var gg="abcdefghijklmn0123456789"
    
const decoded = jwt.verify(token, gg);
console.log(decoded);


    

    fs.readFile("bcrypt/index.json","utf-8",(err,data)=>{

        if(err){
            res.send({
                err:err.message,
                statuscode:400
            })
        }else{


            var dataparse=JSON.parse(data);

            if(dataparse.checkedotp==0){
                res.send({
                    msg:"hi please validate the mail and come",
                    statuscode:400
                }) 
            }else{
              
                var {user:fileuser,password:hasedpassword}=dataparse;
               var {user,password}= req.body


               bcrypt.compare(password,hasedpassword,(err,result)=>{

               var userboo=fileuser==user;

                if(userboo && result){
                    res.send({
                        res:"login successful",
                        statuscode:200
                      }) 
                }else{
                    res.send({
                        res:"login incorrect please check",
                        statuscode:400
                      })   
                }


               
               })


            

            } 


        }


    })
//   res.send("hi this is login api");
});

app.get("/", (req, res) => {
  res.send("hi i m html page ");
});

app.listen(3007, () => {
  console.log("hi i server has been started");
});
