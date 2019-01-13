const express = require('express');
const monsters = require('./routes/monsters');
const bodyParser = require('body-parser');
const habitats = require('./routes/habitats');
const lives = require('./routes/lives');

const app = express();

app.use(bodyParser.json());
app.use('/monsters', monsters);
app.use('/habitats', habitats);
app.use('/lives', lives);

app.use((err, req, res, next) => {
    res.status(500).json(err);
});

module.exports = app;
