//file handling

const fs = require('fs')

// donot run file directly from code runner use cd for better 
 fs.writeFile('write1.txt', "hello world" , function(err, data){
    if(err){
        return console.log(err)
    }

    console.log("successfully written to file")
})



fs.writeFile('write2.txt' , "it's a trial file for learning" , (err,data) => {
    if(err){
        return console.log(err)
    }

    console.log("file created")
})