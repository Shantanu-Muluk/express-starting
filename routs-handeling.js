const express = require("express");
const app = express();

const orderRouter = require("./routs/order");
const userRouter = require("./routs/user");

app.use("/oredrs",orderRouter)

app.use("/usres",userRouter);



app.listen(3000);