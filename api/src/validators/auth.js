const { check , validationResult } = require("express-validator");

exports.validateRequest = [
  check("firstName").notEmpty().withMessage("firstname is required"),

  check("lastName").notEmpty().withMessage("lastname is required"),

  check("email").notEmpty().withMessage("valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 character long "),
];

exports.isRequestValidated = (req,res,next) =>{
    const errors = validationResult(req)
    if (errors.array().length > 0){
        return res.status(400).json({errors :errors.array()[0].msg})}
}