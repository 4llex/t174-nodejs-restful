const express = require('express');
const router = express.Router();

const TaskService = require('../services/taskService');
const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/notfound');

router.post('/', checkAuth, async (request, response) => {
    
    const task = await TaskService.add(request.body);

    response
        .status(200)
        .json(task);
});

router.get('/', async (request, response) => {
    
    const tasks = await TaskService.getAll();
    tasks //&& tasks.lenght 
    ? response.json(tasks)
    :response.status(204).end();
});

router.get('/:taskId', async (request, response) => {
    const task = await TaskService.getById(request.params.taskId);
    task 
        ? response.json(task)
        : notFound(Request, response);
    response
        .status(200)
        .json(data);
});

router.delete('/:taskId', (request, response) => {
    const data = {
        taskId: request.params.taskId, 
        message: `route to delete objet`
    }

    response
        .status(200)
        .json(data);
});

router.patch('/:taskId', (request, response) => {
    const data = {
        taskId: request.params.taskId, 
        message: `route to update an object`
    }

    response
        .status(200)
        .json(data);
});


   
module.exports = router;