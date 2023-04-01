const express = require('express')
const { signUp, signIn, requireSign } = require("../controller/user");
const router = express.Router()

router.post('/signIn',signIn)

router.post('/signUp',signUp)

router.post("/profile",(req,res)=>{ requireSign;
res.status(200).json({message:"profile"})
}); 

module.exports = router