const express= require('express')

const app = express();

app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended : true}))

// app.get("/" , (req,res) =>{
//     //res.sendFile('C:\Users\HP\OneDrive\Desktop\bdd-25\lec-10\index.html')
//     res.sendFile(__dirname + "/index.html")
// })

// app.get("/about.html" , (req , res) =>{
//     res.sendFile(__dirname + "/about.html")
// })


//jo name user ke input name me usko use krna hai yaha pe 
app.post("/adduser" , (req , res) => {
    console.log(req.body);
    let username = req.body.username
    let userpassword = req.body.userpassword

    res.json({
        username, userpassword
    })
})

app.listen(2323 , ()=>{
    console.log('server started')
})