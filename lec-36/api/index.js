const express = require("express");
const { publisher } = require("../shared");
const app = express();
app.use(express.json());



publisher.connect().then( console.log("publisher client connected"))

app.use("/api/v1/order",require("./routes/order"))
app.listen(4000,()=>{
    console.log("server started");
})
