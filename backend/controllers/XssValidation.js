const xss = require("joi");

exports.inputValidationSchema = xss.object({   
    firstName: xss.string().min(3).required(),
    lastName: xss.string().min(3).required(),
    fullName: xss.string().min(3).required(),
    email: xss.string().email().required(),
    login: xss.string().min(3).required(),
    telephone: xss.string().min(10).max(14).required(),
    password: xss.string().min(3).required(),
})