# 1920R

node js class notes and code 

module:
A module in Node.js is a collection of JavaScript functions and objects that can be used by other programs or modules. Modules are similar to JavaScript libraries and can be used to:
Create reusable code->
Modules can be used in many programs, helping developers adhere to the DRY (Don't Repeat Yourself) principle.
Break down complex logic->
Modules can help break down complex logic into smaller, more manageable chunks.
Share code-> 
Modules can be shared with other developers, contributing to the Node.js community



1.core modules-> 
http 
os 
path
fs 
............................

2.local modules->
user defined modules 

module.exports for export 
require() for import 

if u use es6 modules -> 
a. using extention mjs 
b. or type="module " in pacage.json file


...........................................
3. third party modules :

express , mysql2 , bcrypt , nodemailer , ..... 


...............................................

core modules ->
 http module -> 

 create a server -> 
  client ->  -->  req ->server (process the req and provide res)---> res -->client 

var http=require("http");


var server=http.createserver(( ,res)=>{

res.write()

});

var port=3000;
server.listen(port,()=>{

})

http://localhost:3000


res.write()--> pass a string / instance of buffer 


................................................

http methods ->
HTTP (Hypertext Transfer Protocol) defines a set 
of request methods to indicate the desired action 
to be performed on a given resource. These methods 
are also known as HTTP verbs and are case-sensitive.

crud - create read update delete 

req.method

get  -> chaitanya getting the data 
post -> chaitanya posting the data 
put  -> chaitanya putting the data 
patch  -> chaitanya patched the data 
delete -> chaitanya deleted the data 


/......................................................

HTTP status code is a 3-digit code sent by a server in response to a client's request made to the server. It indicates the result of the request and helps to inform the client about the outcome of their request. These codes are part of the HTTP protocol, which is used for communication between a client (like a web browser) and a server




HTTP status codes are grouped into five categories based on the first digit of the code:

1xx (Informational): These codes indicate that the request was received and is being processed.

Example: 100 Continue — The server has received the request headers and the client should proceed to send the request body.
2xx (Successful): These codes indicate that the request was successfully received, understood, and accepted by the server.

Example: 200 OK — The request was successful, and the server has returned the requested resource.
3xx (Redirection): These codes indicate that further action is needed to complete the request, typically by redirecting the client to another URL.

Example: 301 Moved Permanently — The requested resource has been permanently moved to a new URL.
4xx (Client Error): These codes indicate that there was an error with the client’s request, such as incorrect syntax or invalid data.

Example: 404 Not Found — The requested resource could not be found on the server.
5xx (Server Error): These codes indicate that the server failed to fulfill a valid request, usually due to an error on the server's side.

Example: 500 Internal Server Error — The server encountered an unexpected condition that prevented it from fulfilling the request.

200,201,400,401,404,500,505,501,300


...................................................

routing :
the process of managing how a web application responds to URL changes and what it shows users


file  based  url


resource based url 


url module 


parse(pathname) -> will take url ->(req.url)

if(pathname=="/address"){
    send-> "hi this is address"
}else{
     send-> "hi this is other things "
}


.......................................................

timers \

io pooling 

setimmeditek



closed call backs 

...............................

var fs = require("fs");

function hello() {
  return new Promise((resolve, reject) => {
    resolve("hello im promise");
  });
}

hello().then((res) => {
  console.log(res);
});

console.log("hi im syn ");

setTimeout(() => {
  console.log("hi i an set time out");
}, 0);

fs.readFile("data.js","utf-8" ,(err, data) => {
  console.log(data);
});

setImmediate(() => {
  console.log("hello im  set immedate ");
});

process.nextTick(()=>{
    console.log("hello i m next tick");

})

// ("hi im syn ");

// ("hello im promise");

// ("hi i an set time out");

// // data

// ("hello im  set immedate ");
