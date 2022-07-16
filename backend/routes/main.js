const express = require("express")
const router = express.Router()

router.get('/', (request, response) => {              
    response.render('../frontend/views/')
});

router.get('/feedback', (request, response) => {              
    response.render('../../frontend/views/feedback.html')
});

router.get('/components', (request, response) => {              
    response.render('../frontend/views/versions.html')
});

module.exports = router