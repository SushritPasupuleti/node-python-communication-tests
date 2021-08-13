var express = require('express');
var app = express();
var fetch = require('node-fetch');
var amqp = require('amqplib/callback_api');

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.get('/pi/:num', async (req, res) => {
    console.log("Param num: ", req.params.num)

    const data = await fetch(`http://localhost:7000/pi/${req.params.num}`)
    const pi = await data.json();

    res.send({ "message": pi.message })
})

///use spawn to execute python scripts
app.get('/pi-s/:num', async (req, res) => {
    console.log("Param num: ", req.params.num)
    var spawn = require("child_process").spawn;
    var process = spawn('python3', ['../py-server/pi_calc.py', req.params.num]);

    process.stdout.on('data', function (data) {
        res.send(data.toString());
    });
})

///use rabbitmq

app.get('/pi-r/:num', async (req, res) => {
    console.log("Param num: ", req.params.num)
    amqp.connect('amqp://localhost:5672', function (error0, connection) {
    if (error0) {
        console.log("Error")
        throw error0;
    }
    console.log("Connection Successfull")
    connection.createChannel(function (error1, channel) {
        if (error1) {
            console.log("Error in Channel Creation")
            throw error1;
        }
        var queue = 'bunny🐰';
        var msg = {message: 'Hello There', num: req.params.num};

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer(JSON.stringify(msg)));
        console.log(" [x] Sent %s", msg);

        // channel.consume(results, function (msg) {
        //     res.send(msg.content.toString())
        //   }, { noAck: true });

    });

    setTimeout(function() {
        connection.close();
        // process.exit(0)
        }, 500);

});
})


app.listen(6000, function () {
    console.log('Server running on port 6000');
})
