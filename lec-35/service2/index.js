const {createClient} = require("redis")
let subscribe = createClient();

async function notifyme(){
    await subscribe.connect()

    await subscribe.subscribe("notify-me" , (data) =>{
        console.log(data)
    })
}


notifyme()


