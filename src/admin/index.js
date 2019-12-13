const express = require("express");
const app = express();
app.listen(3000,()=>console.log('服务启动3000端口'));

app.get('/gtt',(rej,res)=>{
    console.log(111);
    res.json('../json/classification.json')
    // res.send("hello")
    
})