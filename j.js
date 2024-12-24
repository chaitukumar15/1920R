let mysql=require('mysql2');
let conn=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'chaitu1504',
    database:'dummy'
})
conn.connect((err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('successfully connected to database')
    }
})
module.exports=conn;