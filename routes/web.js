const express = require('express')
const router = express.Router()
const db = require('../database/controller')
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        res.render('index')
    } catch (error) {
        console.log(error);
        res.render('index')
    }
})

router.get('/register', async (req, res) => {
    try {
        res.render('register')
    } catch (error) {
        console.log(error);
        res.render('register')
    }
})

module.exports = router