const express = require("express");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.post('/savemodel', function (request, response) {
//     console.log("Recieved Model");
// });

app.get('/model/model.json', function (request, response) {
    response.sendFile(path.join(__dirname, 'model', 'my-model.json'));
});

app.get('/model/my-model.weights.bin', function (request, response) {
    response.sendFile(path.join(__dirname, 'model', 'my-model.weights.bin'));
});

app.listen(8888, () => { console.log("Server listening on 8888"); });