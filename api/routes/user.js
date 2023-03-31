const express = require('express')
const { signUp, signIn } = require('../controller/user')
const router = express.Router()

router.post('/signIn',signIn)

router.post('/signUp',signUp)

module.exports = router