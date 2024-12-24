let express=require('express');
let app=express();
let cors=require('cors');
let conn=require('./j');
let bcrypt=require('bcrypt');
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.post('/register',async(req,res)=>{
let {name,email,password,gender}=req.body;
// change query by chaitanya sir 
conn.query('select * from users where username=?',[name],(err,verfData)=>{
    console.log(verfData);
    
    for(i of verfData){
      if(i.name==name)
        res.send("data already exist..")
    }
})
let salt=10;
let ps=await bcrypt.hash(password,salt);
conn.query(`insert into users (name,password,email,gender) values ('${name}','${ps}','${email}','${gender}')`,(err,data)=>{
    console.log(err);
    
    res.send('data send..');
})
})
app.listen(port=3003,()=>console.log("http://localhost:"+port))