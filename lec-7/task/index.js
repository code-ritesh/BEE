const fs = require("fs");
const { read, write } = require("../IO/io");

// ----------- Callback version -----------
fs.readFile("../write/user.txt", "utf-8", function (err, data1) {
    if (err) return console.log(err);

    let user1 = JSON.parse(data1);
    console.log("User 1:", user1);

    fs.readFile("../write/users2.txt", "utf-8", function (err, data2) {
        if (err) return console.log(err);

        let user2 = JSON.parse(data2);
        console.log("User 2:", user2);

        let allUsers = user1.concat(user2);
        console.log("All Users:", allUsers);

        fs.writeFile("allUsers.txt", JSON.stringify(allUsers, null, 2), function (err) {
            if (err) return console.log(err);
            console.log("Callback version: Work completed ✅");
        });
    });
});

// ----------- Async/Await version -----------
async function task(file1, file2, output) {
    try {
        let user1 = await read(file1);
        let user2 = await read(file2);
        let allUsers = user1.concat(user2);
        let message = await write(output, JSON.stringify(allUsers, null, 2));
        console.log("Async version:", message);
    } catch (err) {
        console.log("Error in async version:", err);
    }
}

task("../write/user.txt", "../write/users2.txt", "allUsers2.txt");
