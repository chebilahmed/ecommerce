const express = require('express')
const { signUp, signIn, requireSign } = require("../controller/user");
const router = express.Router()
const {check} =require('express-validator')

router.post('/signIn',signIn)

router.post('/signUp',[
    check('firstName')
    .notEmpty()
    .withMessage('firstname is required'),

    check('lastName')
    .notEmpty()
    .withMessage('lastname is required'),

    check('email')
    .notEmpty()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('password must be at least 6 character long ')

],signUp)

router.post("/profile",(req,res)=>{ requireSign;
res.status(200).json({message:"profile"})
}); 

module.exports = router