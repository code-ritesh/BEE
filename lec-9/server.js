const express = require('express');
const app = express();
app.use(express.json()); //we use this to parse the data of json format (make it into readable form)

app.post('/user', (req, res) => {
    console.log("Request body name:", req.body.name)
    res.json(req.body); //call only once 
});

app.listen(1800, () => {
    console.log('Server started');
});
