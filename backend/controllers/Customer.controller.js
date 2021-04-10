const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt_decode = require('jwt-decode');

const Customer = require('../models/Customer.model');

const { inputValidationSchema  } = require("./XssValidation");

//------------------------Client authentication---------------------
const addCustomer = async (req, res) => {

  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };

    bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
        if (err) {
            res.json({
                error: err
            })
        }
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const login = req.body.login;
        const password = hashPassword;
        const role = "Customer";
        const status = "InValide";
        const verified = false;      
        const CustomerPush = new Customer({
            firstName,
            lastName,
            email,
            login,
            role,
            status,
            password,
            verified
        });
        CustomerPush
        
            .save()
            .then(() => res.json("Customer ADDED!!!!!"))
            .catch((err) => res.status(400).json("Error :" + err));
    });
// ----------------------send email validation -------------------------------   
    const token = jwt.sign({login: req.body.login, email : req.body.email}, 'tokenkey');

    const transport = nodemailer.createTransport({
      service: "gmail",
          auth: {
            user: 'elhanchaoui.emailtest@gmail.com',//email
            pass: 'Alsa2018'//password
          }
      })
    
      await transport.sendMail({
          from: 'elhanchaoui.emailtest@gmail.com',
          to: req.body.email,
          subject: "Email Activated Account",
          html: `
          <h2>Please click on below link to activate your account</h2>
          <p>http://localhost:3000/Customer/activateCompte/${token}</p>
      `
      })
  
    
}
//------------------------Customer authentication---------------------
const activateCompteCustomer =  async(req, res) => {
    const token = req.params.token;
  
    jwt.verify(token, 'tokenkey');
  
    let decoded = await jwt_decode(token);
    let login = decoded.login;
  
     await Customer.findOneAndUpdate({ login: login },{verified : true});
  
     res.json({
             message : "ok"
     });
  }
  
//-------------------------login Customer-----------------------------
const loginCustomer = (req, res) => {
  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };

    let login = req.body.login;
    let password = req.body.password;
  
    Customer.findOne({
        login: login
      })
      .then(Customer => {
  
        if (Customer) {
          bcrypt.compare(password, Customer.password, function (err, result) {
            if (err) {
              res.json({
                error: err
              })
            }
            if (result) {

              if(Customer.verified == false){
                res.json({
                  verified: 'InActive'
                  })
            }if(Customer.role != "Customer"){
              res.json({
                role: Customer.role
                })
          }else{

            let token = jwt.sign({
                login: login
              }, 'tokenkey', (err, token) => {
                res.cookie("token", token),
                // res.cookie("role", role)
                res.json({
                  token: token,
                  role: Customer.role
                })
              })
            }



            } 
            
          })
        } else {
          res.json({
            message: 'Customer not found'
          })
        }
      }).catch((err) => res.status(400).json("Error :" + err));
  }
 //-------------------------logout Customer and remove token-----------------------------   
 const logout = (req, res) => {
    const deconnect = res.clearCookie("token")
  
    res.json({
        message: 'User is Signout !!'
    })
  }

module.exports={
    addCustomer,activateCompteCustomer,loginCustomer,logout
  };