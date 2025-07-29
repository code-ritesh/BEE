const express = require('express')

const app = express()

//port = communication end point
//node js architecture = event minimal based 

app.get("/" , (req , res) =>{
    //console.log(req)
    //res.send("hello world")
    //res.send("<h1>hello world </h1>")

    res.json({
        name : "ritesh",
        roll_no : 2431,
        islogin : true
    })
})


//path vaariable/param
//1. params

app.get('/users/:id' , (req , res) =>{
    let id = req.params.id
    res.send(id)
})

//2. query parameter

app.get("/blogs" , (req , res) =>{
    console.log(req.query.title)
    console.log(req.query.desc)
    res.send("got it")
})


app.listen(2222 , () => {
    console.log("server started")
})