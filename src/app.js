const express = require('express');
const app = express();

// Middlewares
const notFound= require('./middleware/notfound')
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(helmet());
app.use(morgan('dev')); // mostra os requests do usuario no terminal 
app.use(express.json());

// Routes
const taskRouter = require('./routes/tasks');
app.use('/api/tasks', taskRouter);

// Missing Routes
app.use(notFound);

module.exports = app;