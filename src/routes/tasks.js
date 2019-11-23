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

module.exports = router;