const fs = require('fs')

//const data = fs.readFileSync('demo.txt').toString()
//console.log(data)

fs.readFile('demo.txt' , "utf-8" ,  (err , data) =>{
    if(err) return console.log(err)

    console.log(data)
})


fs.readFile('hello.txt' , "utf-8" , (err , data) => {
    if(err) console.log(err)
    console.log(data)
})

