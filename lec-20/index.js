let express = require('express')
const { m1 , m2, checkAdmin } = require('./middleware/middleware')
const BlogRoutes = require("./routes/blogsRoute")


let app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded())
app.use(m1)
//app.use(m2) // all middleware should placed before
app.use(m2)


app.get("/home" , (req , res , next)=>{
    console.log("running controller home ..")
    res.json({
        success : true,
        message : 'welcome to home'
    })

    next()
})



app.get("/dashboard", checkAdmin , (req, res, next) => {
    if (req.isAdmin) {
        return res.json({
            success: true,
            message: "welcome to dashboard "
        });
    }

    res.json({
        success: false,
        message: "not authorised , welcome to dashboard"
    });
});


app.use("/api/blogs" , BlogRoutes)

app.listen(3400 , ()=>{
    console.log("server started on 3400")
})

//middleware run in order in which it called