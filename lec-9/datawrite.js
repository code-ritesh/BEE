const {write} = require('./IO/io')
const express = require('express');

const app = express();
const port = 4400;

app.use(express.json());

app.listen(port, (req, res) =>{
    
    console.log("server started")
})

app.post('/user', (req, res)=>{
    console.log(req.body);
    res.json(req.body);

    async function writing() {
        try {
            await write("./lec-9/file/data.txt", JSON.stringify(req.body));
            console.log("Users written to file");
        } catch (err) {
            console.error("Error writing to file:", err);
        }
    }  
        writing();
})