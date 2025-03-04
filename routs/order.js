const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("order list")
})

router.get("/", (req,res)=>{
    res.send("order creatd")
})

module.exports = router