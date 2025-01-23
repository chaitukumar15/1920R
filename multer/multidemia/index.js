
fetch("http://localhost:3008/data",{
    method:"GET",   
}).then((res)=>{

    return res.json()

}).then((data)=>{

    console.log(data);

var table=document.getElementsByTagName("table")

    var tr = document.createElement("tr");


var td1 = document.createElement("td");

console.log(data.data[0]);

 td1.innerText=data.data[0].username


var td2 = document.createElement("td");

td2.innerText=data.data[0].password

tr.append(td1,td2);

console.log(tr);

table[0].append(tr)

    
})