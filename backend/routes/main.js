const express = require("express")
const router = express.Router()

router.get('/', (request, response) => {              
    response.render('../../frontend/views/introduction.html')
});

router.get('/get-started', (request, response) => {              
    response.render('../../frontend/views/getstarted.html')
});

router.get('/feedback', (request, response) => {              
    response.render('../../frontend/views/feedback.html')
});

router.get('/versions', (request, response) => {              
    response.render('../frontend/views/versions.html')
});

module.exports = router