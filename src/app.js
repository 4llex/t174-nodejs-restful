const express = require('express');
const app = express();

const taskRouter = require('./routes/tasks');
app.use('/api/tasks', taskRouter);

const notFound= require('./middleware/notfound')
app.use(notFound);

module.exports = app;