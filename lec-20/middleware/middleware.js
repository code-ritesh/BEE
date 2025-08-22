function m1(req,res , next){
    console.log("running middleware 1")

    req.user = {
        id : 1,
        username : "ritesh"
    }

    next()
}

function m2(req , res , next){
    console.log("running middleware 2")
    console.log(req.user)

    req.isAdmin = true;
    next()
}

function checkAdmin(req , res , next){
    let {name} = req.query

    if(name == "ritesh"){
        req.isAdmin = true
        return next()
    }

    res.json({
        success : false,
        message : "you are not a admin"
    })
}

function isLogin(req, res, next) {
  console.log('login middleware running')
}

module.exports = {
    m1,
    m2,
    checkAdmin,
    isLogin
}