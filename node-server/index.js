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

///use spawn to execute python scripts
app.get('/pi-s/:num', async(req, res) => {
    console.log("Param num: ", req.params.num)
    var spawn = require("child_process").spawn;
    var process = spawn('python3', ['../py-server/pi_calc.py', req.params.num]);
    
    process.stdout.on('data', function (data) {
        res.send(data.toString());
      });
})


app.listen(6000, function () {
    console.log('Server running on port 6000');
})
