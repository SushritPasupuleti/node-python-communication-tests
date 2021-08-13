var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello There')
})


app.listen(6000, function () {
    console.log('Server running on port 6000');
})
