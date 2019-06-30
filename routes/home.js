var express = require('express');
var router = express.Router();



router.get('/', (req, res) => {
    try {
        res.send('Home route page')

    } catch (error) {
        res.send('Error home route page')
    }
})

module.exports = router