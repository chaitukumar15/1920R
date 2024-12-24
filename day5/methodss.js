

var http=require("http");
var fs=require('fs')

var server =http.createServer(async(req,res)=>{

    if(req.method=="GET"){
        res.write("hi this is get method")
        res.end()
    }else if(req.method=="DELETE"){
     var a= await fetch('https://fakestoreapi.com/products')
        var a1=await a.json()
        fs.writeFile("index.json",JSON.stringify(a1),"utf-8",(err)=>{
            if(err)
            {
                res.write(err)
                res.end()
            }
            else{
                res.write("file created")
                res.end()
            }

        })
        
                
        
        // res.write("hi this is post method")
        // res.end()
    }else if(req.method=="PUT"){
fs.readFile("index.json","utf-8",(err,data)=>{
    if(err){
        res.write("error")
        res.end()
    }
    else{
        res.write(data)
        res.end()
    }
})

    }
    else{
        res.write("hi this is not get or post method")
        res.end() 
    }



})

server.listen(3008,()=>{
   console.log("server has been started ");
    
})