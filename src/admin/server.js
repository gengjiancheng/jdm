const  express = require("express");
const app = express();
app.listen(3000,()=>console.log("服务起于3000端口"))
const  {readFile}=require("../utils/promiseFS") 
const add = require("../json/classification")


app.get('/gtt',(req,res)=>{
   readFile('../json/classification.json').then(()=>{
	   res.send(add);
	   console.log(add)
   }).catch(()=>{
	   res.send('error')
   })
})