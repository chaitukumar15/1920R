var express = require("express");

var app = express();

var multer = require("multer");

app.use(express.json());

var cors=require("cors")

app.use(cors())

app.use(express.urlencoded({ extended: true }));

console.log(__dirname, "dirname");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(__dirname, "insidwe");

    cb(null, __dirname + "/multidemia");
  },
  filename: (req, file, cb) => {
    console.log(file);

    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/reg", upload.array("hh", 3), (req, res) => {

    console.log({
        file: req.files,
        body: req.body,
      });
    
  res.send({
    file: req.files,
    body: req.body,
  });   
});

app.listen(3009, () => {
  console.log("server has been started ");
});
