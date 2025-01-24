var mysql2=require("mysql2");

require("dotenv").config()

console.log(process.env);


var connection=mysql2.createConnection({

    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database

})


connection.connect((err)=>{

if(err){
    console.log(err.message);
    
}else{
    console.log("mysql connected ");
    
}

})


module.exports=connection;