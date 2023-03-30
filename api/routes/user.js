const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/signIn', (req, res) => {
  // Handle sign in request
})

router.post('/signUp', (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: 'User already exists',
        })
      }

      const { firstName, lastName, email, password } = req.body

      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        userName: Math.random().toString(),
      })

      _user.save()
        .then((data) => {
          return res.status(200).json({
            user: data,
          })
        })
        .catch((error) => {
          return res.status(400).json({
            message: 'Something went wrong',
          })
        })
    })
})

module.exports = router