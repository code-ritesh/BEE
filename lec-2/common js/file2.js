<<<<<<< HEAD
let file3 = require('./file3')
console.log(file3)


const sub = (a,b) =>{
    return a-b
}

console.log(file3.add(2,3))
console.log(file3.mul(2,3))
console.log(sub(400,300))


=======
let file3 = require('./file3')
console.log(file3)


const sub = (a,b) =>{
    return a-b
}

console.log(file3.add(2,3))
console.log(file3.mul(2,3))
console.log(sub(400,300))


>>>>>>> 880e7ad (lec3)
module.exports.sub = sub;