var express = require("express");
var app = express();

const WebSocket = require('ws');

app.get('/notification', async function (req, res) {

    var query = require('url').parse(req.url,true).query;

    const connection = new WebSocket('ws://localhost:8080');
    connection.binaryType = "arraybuffer"

    connection.onopen = () => {
        console.log('connected');
        connection.send(query.message + new Date());
    };

    res.send(query.message)
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});