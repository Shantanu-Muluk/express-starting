const express = require("express");
const app = express();

const path = require("path");

app.get("/api/products", (req,res)=>{
    res.sendFile(path.join(__dirname, "views", indexedDB.html));
});

app.listen(3000)