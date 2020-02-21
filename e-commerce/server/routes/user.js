const express = require('express');
const router = express.Router()

const { signup } = require('../controllers/user');

router.post('/signup', signup)

router.get('/signup', (req, res) =>{
    res.send(`${hello}`)
})


module.exports = router;