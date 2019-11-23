const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
    
    const data ={
        message: "Viva la vida lookaaa baby!"
    };

    response
        .status(200)
        .json(data);
});

router.get('/', (request, response) => {
    const data ={};

    data.message = `Dado enviado ${request.method} ao usuario.!!!`;

    response
        .status(200)
        .json(data);
});

router.get('/:taskId', (request, response) => {
    const data = {
        taskId: request.params.taskId, 
        message: `Busca com GET e ID`
    }

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