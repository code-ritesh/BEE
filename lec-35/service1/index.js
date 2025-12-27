const {createClient} = require("redis")
let publisher = createClient();

async function notifyme(){
    await publisher.connect()

    await publisher.publish("notify-me" , "hello from service 1")

    //await publisher.pubish("like" , "user1 liked your post")
}


notifyme()


