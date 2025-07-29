// const { resolve } = require("path");

// let promise = new Promise((resolve , reject) => {
//     if(5==6)resolve("promise resolved");

//     return reject("promise rejected")
// })

// console.log(promise)

// promise.then( (data) =>{
//     console.log(data)
//     console.log("promise completed")
// })

// .catch ((err) => {
//     console.log(err)
//     console.log("promise not completed")
// })


let users = [
    {
        id : 1,
        name : "ram",
        age :20
    },

    {
        id : 2,
        name : "shyam",
        age : 17
    }
]

function iseligible(id) {
    //find user in db
    //check age
    //if else 
    return new Promise( (resolve , reject ) => {
        let user = users.filter( (user) => user.id == id)[0];
        console.log(user)

        if(!user) return reject("no user found");
        if(user.age >= 18){
            resolve("eligible for vote")
        }

        else reject("not eligible for vote")
    })

}

iseligible(1).then((data) => {
    console.log(data)
    console.log("resolve runs here")
})

.catch( (err) => {
    console.log(err)
    console.log("reject work here")
})


