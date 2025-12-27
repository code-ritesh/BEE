const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 8080 });
let rooms = new Map();
// {
//     "1234": [s1, s2, s3]
// }

wss.on("connection", function (socket) {
  console.log("user connected");

  socket.on("message", function (message) {
    let parsedMessage = JSON.parse(message);

    if (parsedMessage.type == "join") {
      
      let roomId = parsedMessage.roomId;

      if (!rooms.get(roomId)) {
        rooms.set(roomId, new Set());
      }

      rooms.get(roomId).add(socket);
      socket.send("you are added to room " + roomId.toString());
      console.log(rooms);
    } 
    
    else if (parsedMessage.type == "chat") {
      let roomId = parsedMessage.roomId;
      let msg = parsedMessage.message; // ✅ renamed to avoid shadowing
      let allSockets = rooms.get(roomId);

      if (allSockets) {
        allSockets.forEach((s) => {
          s.send(msg);
        });
      }
    }

    else if(parsedMessage.type == "create"){
      //create a room id and send it to user

      let roomid = Math.floor(Math.random() *10000000);

      rooms.set(roomid , new Set());

      socket.send(roomid)

    }


  });



});

