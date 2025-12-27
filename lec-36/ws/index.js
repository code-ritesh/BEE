let {WebSocketServer} = require('ws')

let wss = new WebSocketServer({port : 4000});
let Subscriber = require('../shared/index')

wss.on("connection" , (socket) =>{
    console.log("new user connected")
    async function bookUpdate(){
        await Subscriber("book:update" , (message) =>{
            console.log(message)
            broadcast(JSON.stringify(message))
        })
    }

    bookUpdate()
})

function broadcast(data){
    allSockets.forEach( (s) =>{
        s.send(data);
    })
}