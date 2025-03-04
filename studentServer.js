const express = require("express");
const app = express();

const studentRouter = require("./routs/studentRout");

const courseRouter = require("./routs/courseRout");

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to Student and the Courese Portal APT!")
})

app.listen(3000,()=> console.log("Server started"))