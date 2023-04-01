const User = require('./../../models/user');
const jwt = require('jsonwebtoken')


exports.signUp = (req,res) => {
    User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: 'Admin already exists',
        })
      }

      const { firstName, lastName, email, password } = req.body

      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        userName: Math.random().toString(),
        role: 'admin'
      })

      _user.save()
        .then((data) => {
          return res.status(200).json({
            message : "Admin created seccessfully"
          })
        })
        .catch((error) => {
          return res.status(400).json({
            message: 'Something went wrong',
          })
        })
    })
}


exports.signIn = (req,res) => {
  User.findOne({ email: req.body.email })
  .exec()
  .then((user) => {

      if (user) {
          if (user.authenticate(req.body.password) && user.role == 'admin'){
            const token = jwt.sign({_id: user._id ,},process.env.jwt_secret, {expiresIn:"1h"})
            const {_id ,firstName , lastName , email , role ,fullName} = user
            res.status(200).json({
              token ,
              user : {
                _id , firstName , lastName , email , role ,fullName
              }
            })
          }
          else{

                return res.status(400).json({
                  message : "Invalid password"
                })

          }



      }
      else {
          return res.status(400).json({ 
            message : 'somthing went wrong'
          })
      }
    
    
    })

  .catch((error) => {
    return res.status(400).json({ message: 'Something went wrong' })
  })


}


exports.requireSign = (req, res,next)=>{

    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.jwt_secret);
    console.log(user);
    req.user=user
    

    next()

}