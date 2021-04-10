const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SuperAdmin = require('../models/superAdmin.model');
const Admin = require('../models/Admin.model');
const Seller = require('../models/Seller.model');
const { inputValidationSchema  } = require("./XssValidation");

//______________________get all SuperAdmin__________________________ 
const getAllSuperAdmins = (req, res) => {
        SuperAdmin.find()
        .then(superAdmin => {
              res.status(200).json(superAdmin);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
      };
//_______________________ Super Admin authentication________________________

const addSuperAdmin = (req, res) => {

  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };
       
        bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
            if (err) {
              res.json({error : err})    
            }
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const login = req.body.login;
        const password = hashPassword;
        const SuperadminPush = new SuperAdmin({
          firstName,
          lastName,
          email,
          login,
          password,  
        });
        SuperadminPush
          .save()
          .then(() => res.json("SupperAdmin authentication successfully"))
          .catch((err) => res.status(400).json("Error :" + err));
      });
      }
      
      //-------------------------login Super Admin-----------------------------
      
      const loginSuperAdmin = (req, res) => {
      
        let error = [];

        
        const { err } = inputValidationSchema.validate(req.body)
        if (err) {
      
                
      
                error.push(err.details[0].message);
                return res.json({
      
                        error : error
                }) 
      
        };

        let login=req.body.login;
        let password=req.body.password;
      
      SuperAdmin.findOne({login : login})
      .then(superadmin => {
      
      if(superadmin){
        bcrypt.compare(password, superadmin.password, function(err, result){
            if (err) {
                res.json({
                  error : err
                })
              }
           if(result){
              let token=jwt.sign({login :login},'tokenkey',(err,token) => {
                res.cookie("token", token)  
                res.json({
                    token : token
                })
              })
           }
           
        })
      }else{
        res.json({
            message : 'SuperAdmin not found'
        })
      }
      }).catch((err) => res.status(400).json("Error :" + err));
      }

 //-------------------------logout Super Admin and remove token-----------------------------   
     const logout = (req, res) => {
        const deconnect = res.clearCookie("token")
      
        res.json({
            message: 'User is Signout !!'
        })
      }
      

//__________________________add Admin____________________
const addAdmin = (req, res) => {

  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };
        bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
                if (err) {
                  res.json({error : err})    
                }
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const email = req.body.email;
            const login = req.body.login;
            const password = hashPassword;
        
            const adminPush = new Admin({
              firstName,
              lastName,
              email,
              login,
              password,
        
            });
            adminPush
              .save()
              .then(() => res.json("Admin authentication successfully"))
              .catch((err) => res.status(400).json("Error :" + err));
            });
            };
      
      //______________________get all Admins_____________________ 
const getAllAdmins = (req, res) => {
        Admin.find()
        .then(admin => {
              res.status(200).json(admin);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
      };
      
      //______________________Delete Admin_____________________ 
const deleteAdmin = (req, res) => {
        const {id} = req.params;
        Admin.findOneAndDelete({_id: id})
            .then(admin => {
                if(!admin) {
                  res.status(404).json({
                    message: "Does Not exist a admin with id = " + id,
                    error: "404",
                  });
                }
                res.status(200).json({});
            }).catch(err => {
                return res.status(500).send({
                  message: "Error -> Can NOT delete a categorie with id = " + id,
                  error: err.message
                });
            });
      };
      
      //________________________updating Admin____________________
      
const updateAdmin = (req, res) => {
        bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
        if (err) {
          res.json({error : err})       
        }
        const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email;
      const login = req.body.login;
      const password = hashPassword;
        Admin.updateOne(
          {_id: req.params.id},
          {
        firstName: req.body.firstName,
        LastName: req.body.lastName,
        email: req.body.email,
        login: req.body.login,
        password: hashPassword,
      
      })
      
      .then(Admin => {
        if(!Admin) {
      
          return res.status(404).send({
            message: "Admin not found with id " + req.params._id
        });
      
        }
        res.status(201).json("Admin UPDATED successfully");
      }).catch(err => {
      
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Admin not found with id " + req.params.id
          });                
      }
      return res.status(500).send({
          message: "Error updating Admin with id " + req.params.id
        });
        })
      });
      }
      
      
      // ______________________get admin by id__________________
const getAdminById = (req, res) => {
        Admin.findById(req.params.id)
                  .then((admin) => res.json(admin))
                  .catch((err) => res.status(400).json("Error :" + err));
      };
      
      


//______________________get all Seller_____________________ 
const getAllSeller = (req, res) => {
        Seller.find()
        .then(SellerInfos => {
              res.status(200).json(SellerInfos);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
    };
    

 //________________________updating Seller____________________
const updateSeller = (req, res) => {
        // Find Seller By ID and update it
        Seller.updateOne(
                         {_id: req.params.id},
                          {
                            status : req.body.status,
                            type : req.body.type
                          }
                        )
        .then(() => res.status(201).json("Seller updated successfully"))
        .catch((err) => res.status(400).json("Error :" + err));
      };
      // ______________________get seller by id__________________
const getSellerById = (req, res) => {
        Seller.findById(req.params.id)
            .then(Seller => {
              res.status(200).json(Seller);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Seller not found with id " + req.params.id,
                        error: err
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving Seller with id " + req.params.id,
                    error: err
                });
            });
      };
              
      //______________________Delete Seller _____________________ 
      const deleteSeller = (req, res) => {
        const {id} = req.params;
        Seller.findOneAndDelete({_id: id})
            .then(admin => {
                if(!admin) {
                  res.status(404).json({
                    message: "Does Not exist seller with id = " + id,
                    error: "404",
                  });
                }
                res.status(200).json({});
            }).catch(err => {
                return res.status(500).send({
                  message: "Error -> Can NOT delete a seller with id = " + id,
                  error: err.message
                });
            });
      };
      



module.exports={
  getAllSuperAdmins,addSuperAdmin,loginSuperAdmin,logout,addAdmin,getAllAdmins,deleteAdmin,updateAdmin,getAdminById,getAllSeller,updateSeller,getSellerById,deleteSeller
};