// callback and promise 

let products = [
    { name: "samsung", amount: 20000 , quantity : 10 },
    { name: "iphone 16", amount : 100000 , quantity : 1 },

]

// function buyProduct( product_name , callback ){
//     // some async operation
//     //1. get product detail from db
//     //2. write order detail in user db

//     setTimeout(() => {
//         console.log("order completed & your order is " + product_name);
//         callback()
//     }, 0);
// }

// buyProduct("mobile phone" , function(){ 
//     console.log("product is purchased");
// })


function buyProduct( product_name , callback ){
    
    let is_product = null;

    for(var i = 0 ; i < products.length ; i++){
        if(products[i].name == product_name){
            is_product = products[i];
            break;
        }
    }

    if(!is_product){
            callback("product not available" , null );
        }

        else{
            callback(null, is_product.amount);
        }
}

let bank_balance = 200000;

function deductAmount(amount , callback ){

    if(amount > bank_balance){
        callback("your account balance is low" , null)
    }

    else{
        bank_balance -= amount;
        callback(null, "amount deducted successfully, your current balance is " + bank_balance);
    }
}

buyProduct("motorola" , function(err, amount) {
    if(err) return console.log(err)
    console.log('amount is '  + amount  )

    deductAmount(amount, function(err, message) {
        if(err) return console.log(err);
        console.log(message);
    })
} )


//problems in callback
// 1. callback hell
//2. readability & maintainability






