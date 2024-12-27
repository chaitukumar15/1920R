var http = require("http");
const { json } = require("stream/consumers");
var url=require("url");

var server = http.createServer(async (req, res) => {



    var urlpar= url.parse(req.url,{extends:true})


    if(urlpar.pathname=="/products"){
          res.write("khavfs");
        res.end()
    }else{
        res.write("hi not ");
        res.end()
    }
    
    
    // res.write(JSON.stringify(urlpar.pathname));

});

server.listen(3008,"192.168.0.107",() => {
  console.log("server has been started ");
});
