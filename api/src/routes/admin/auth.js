const express = require('express')
const { signUp, signIn, requireSign } = require("./../../controller/admin/auth");
const router = express.Router()

router.post('/admin/signIn',signIn)

router.post('/admin/signUp',signUp)

// router.post("/profile",(req,res)=>{ requireSign;
// res.status(200).json({message:"profile"})
// }); 

module.exports = router