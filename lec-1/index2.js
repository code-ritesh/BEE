<<<<<<< HEAD
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

//console.log(fs)

 console.log('start')

setTimeout(() =>{
    console.log("set time out")
} , 0)

setImmediate( ()=>{
    console.log('set immediate')
} , 0)


//fs.readFile( "demo.txt" ,  () => {
//     console.log("file read")

//     setTimeout(() => {
//         console.log('timer 2 inside readfile')
//     }, 0);

//     setImmediate( () => {
//         console.log('immediate 2 read file ')
//     } , 0)
// })

function sometask() {
    return new Promise((resolve, reject) => {
        resolve("promise");
    });
}

sometask()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

process.nextTick( () => {
    console.log('next tick')
})



=======
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

//console.log(fs)

 console.log('start')

setTimeout(() =>{
    console.log("set time out")
} , 0)

setImmediate( ()=>{
    console.log('set immediate')
} , 0)


//fs.readFile( "demo.txt" ,  () => {
//     console.log("file read")

//     setTimeout(() => {
//         console.log('timer 2 inside readfile')
//     }, 0);

//     setImmediate( () => {
//         console.log('immediate 2 read file ')
//     } , 0)
// })

function sometask() {
    return new Promise((resolve, reject) => {
        resolve("promise");
    });
}

sometask()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

process.nextTick( () => {
    console.log('next tick')
})



>>>>>>> 880e7ad (lec3)
console.log('end')