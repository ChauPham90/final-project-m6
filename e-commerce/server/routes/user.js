const express = require('express')
const router = express.Router();
const { signup } = require('../controllers/user')
router.get('/signup', (req, res) => {
    res.send('hi')
})
router.post('/signup', signup)

module.exports = router;