const express = require("express");
const app = express();

const { createClient } = require("redis");
const client = createClient();

async function connect() {
    client.on("error", (err) => {
        console.log("Redis client error", err);
    });
    await client.connect();
}

async function cachedData() {
    await client.set("user:100", JSON.stringify({ name: "RITESH", age: 20 }));
    console.log("Data cached successfully");
}

async function readUser() {
    let user = await client.get("user:100");
    if (!user) {
        console.log("No user data found");
        return null;
    }
    return JSON.parse(user);
}

connect().then(async () => {
    await cachedData();

    const data = await readUser();
    console.log(data);

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
});


