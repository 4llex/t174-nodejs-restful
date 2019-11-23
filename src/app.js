const express = require('express');
const app = express();

app.use((request, response, next) => {
    const data = {
        message:" it works baby!"
    }
    response
        .status(200)
        .json(data)
});

module.exports = app;