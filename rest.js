var express = require("express");
var app = express();

const WebSocket = require('ws');

const path = require('path')

app.use('/frontend', express.static(path.join(__dirname, 'frontend')))

app.get('/notification', async function (req, res) {

    var query = require('url').parse(req.url,true).query;

    const connection = new WebSocket('ws://localhost:9000');
    connection.binaryType = "arraybuffer"

    connection.onopen = () => {
        console.log('connected');
        connection.send(query.message);
    };

    res.send(query.message)
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});