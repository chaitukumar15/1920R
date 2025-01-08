var express = require("express");
var nodemailer = require("nodemailer");
var app = express();

app.use(express.json());

var transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "cheymadakasira@gmail.com",
    pass: "jhdo thvj qfeh octd", // Ensure this is your correct app password
  },
});

app.post("/reg", (req, res) => {

var otp="";
for(i=0;i<4;i++){
    var n=Math.floor(Math.random()*10)
    otp+=n
}


  var options = {
    from: "cheymadakasira@gmail.com",
    to: `${req.body.username}`,
    subject: "Sending Email using Node.js",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="color: red;">hi ur otp is</h1>
        <center>
        <h1 style="color: green">${otp}
        </h1></center>
        <img src="https://m.media-amazon.com/images/I/91KKFQ6gCDL.jpg" alt="hi">
    </body>
    </html>`,
    attachments: [
      {
        filename: "chaitanya.txt",
        path: "mail/mail.txt",
      },
    ],
  };
  transpoter.sendMail(options, (err, info) => {

    if (err) {
        console.log(err.message);
        
        res.send(err.message)
    }
    else {
        console.log(info.message);
        
        res.send(info)
    };
  });
});

app.listen(4009, () => {
  console.log("hi this is port");
});
