var express = require("express");

var cors = require("cors");

var app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

var connection = require("../mysql/index.js");

app.use(cors());

app.get("/data", (req, res) => {
  connection.query("select * from users1", (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(data);
    }
  });
});

app.post("/reg", (req, res) => {
//   console.log(req.body.password.length > 0 && req.body.user.length > 0);

  res.send({ msg: "data receiveed", data: req.body });
});

app.listen(3009, () => {
  console.log("hi server has been started");
});
