const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("user list")
})

router.get("/", (req,res)=>{
    res.send("user creatd")
})

module.exports = router