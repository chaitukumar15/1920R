var http = require('http');


var obj={
    name:"praveen",
    age:24
}

var server =http.createServer(async(req,res)=>{
console.log("hi i m in server");
 

var h1=await fetch("https://fakestoreapi.com/products");
var g=await h1.json();
console.log(g);
res.write(JSON.stringify(g))


res.end()

})

var port =3000;
server.listen(port,()=>{

console.log("server has started in port  "+port);

})



