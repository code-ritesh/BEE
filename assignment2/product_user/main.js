const fs = require('fs');

const u = require('./user.js')
const p = require('./product.js')
const [ , , userSearch , productSearch ] = process.argv







function checkUser( user ){
    let n = u.users.length;

    for(let i = 0 ; i < n ; i++){
        if(user == u.users[i].name ) return true;
    }

    return false;
}

function checkProduct( product ){
    let n = p.products.length;

    for(let i = 0 ; i < n ; i++){
        if(product == p.products[i].name ) return true;
    }

    return false;
}

function buy(user , product ){
    let isuser_available = checkUser(userSearch)
    let isproduct_available = checkProduct(productSearch)

    if(isuser_available == false  ) return console.log("user is not here cannot available to buy ")
    if(isproduct_available == false) return console.log("product not available")

    let purchase = {
        user , product
    }

    // fs.writeFile("./buyproduct.json" , JSON.stringify(purchase) , (err) => {
    //     if(err) return console.log(err)
    //     console.log("thanks for shopping ")

    //     fs.readFile("./buyproduct.json" , "UTF-8" , )
    // })

    let history = []

    fs.readFile("./buyproduct.json" , "UTF-8" , (err, data) => {

        if(err) return console.log(err)

        
        
            
    })
}


buy(userSearch , productSearch)


