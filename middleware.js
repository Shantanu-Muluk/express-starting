const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Authentication lib called");
    next();
})

app.use("/lib-2",(req,res,next)=>{
    console.log("Lib-2 Entrered")
    next();
})

app.use("/lib-3",(req,res,next)=>{
    console.log("Lib-3 Entered");
    next()
})

app.get("/lib-2",(req,res)=>{
    res.send("<h1>Welcome in lib number 2</h1>")
})

app.get("/lib-3",(req,res)=>{
    res.send("<h1>Welcome in lib-3 </h1>")
})

app.listen(5050,()=>console.log("server runned"))