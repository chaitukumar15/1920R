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


get  -> chaitanya getting the data 
post -> chaitanya posting the data 
put  -> chaitanya putting the data 
patch  -> chaitanya patched the data 
delete -> chaitanya deleted the data 

