const express = require("express")
const router = express.Router()

router.get('/buttons', (request, response) => {              
    response.render('../../frontend/views/components/button.html')        
});

router.get('/navbar', (request, response) => {              
    response.render('../../frontend/views/components/navbar.html')
});

module.exports = router