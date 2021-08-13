var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.get('/pi', async(req, res) => {
    const data = await fetch('http://localhost:7000/pi/4000')
    const pi = await data.json();
    res.send('')
})


app.listen(6000, function () {
    console.log('Server running on port 6000');
})
