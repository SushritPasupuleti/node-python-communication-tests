var express = require('express');
var app = express();
var fetch = require('node-fetch');

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.get('/pi/:num', async(req, res) => {
    console.log("Param num: ", req.params.num)

    const data = await fetch(`http://localhost:7000/pi/${req.params.num}`)
    const pi = await data.json();
    
    res.send({"message": pi.message})
})


app.listen(6000, function () {
    console.log('Server running on port 6000');
})
