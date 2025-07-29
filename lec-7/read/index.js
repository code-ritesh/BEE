const fs = require("fs");
const { read } = require("../IO/io.js");

// ---------- Callback Version ----------
fs.readFile("../write/user.txt", "utf-8", function (err, data) {
    if (err) return console.log(err);

    let users = JSON.parse(data);
    console.log("From fs.readFile:", users[0]);
});

// ---------- Async/Await Version ----------
async function readUsers() {
    try {
        let users = await read("../write/user.txt");
        let users2 = await read("../write/users2.txt");

        console.log("From read() user.txt:", users);
        console.log("From read() users2.txt:", users2);
    } catch (err) {
        console.log("Error reading files:", err);
    }
}

readUsers();
