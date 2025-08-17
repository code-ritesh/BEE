const express = require('express')
const app = express()

app.use(express.static( __dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/users' , (req , res) => {

    try{
        const {email , password} = req.body;
        console.log(email + " " + password)
        res.json({
        success : true , 
        message : "user added successfully" , 
        data : {
            email : email ,
            password : password
        }
    })
    }

    catch(err){
        res.json({
            success : false ,
            message : err.message
        })
    }

})

app.listen( 2000 , () => {
    console.log("server started")
})