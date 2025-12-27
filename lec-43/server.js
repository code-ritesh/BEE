const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.get("/" , (req , res) =>{
    res.send("hello world")
})

mongoose("mongodb://mongo:27017/test")
.then( () => {
    console.log("connected")
})

.catch( (e) => {
    console.log(e)
})


app.listen( 4000 , () =>{
    console.log("server started")
})