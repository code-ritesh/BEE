const fs = require("fs")
let users=[
    {
        id:1,
        name:"ritesh",
        age:"26"
    },
     {
        id:2,
        name:"om",
        age:"29"
    },
]

let demo =[
    {
        id:3,
        name:"shayam",
        age:"19"
    },
     {
        id:8,
        name:"raj",
        age:"99"
    },
]



fs.writeFile("users2.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log(" users2.txt written of users array of obj")
})

fs.writeFile("user.txt" , JSON.stringify(demo) , (err)=>{
    if(err) return console.log(err)
    console.log("demo written on user.txt")
} )