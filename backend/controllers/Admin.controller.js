const Admin = require('../models/Admin.model');
const DeliveryMan = require('../models/DeliveryMan.model')
const Order = require('../models/Order.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { inputValidationSchema  } = require("./XssValidation");

const getAllAdmins = (req, res) => {
    Admin.find()
      .then(AdminInfos => {
        res.status(200).json(AdminInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Error!",
          error: error
        });
      });
  };
  
//-------------------------login Admin-----------------------------

const loginAdmin = (req, res) => {
  
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
  
    Admin.findOne({
        login: login
      })
      .then(Admin => {
  
        if (Admin) {
          bcrypt.compare(password, Admin.password, function (err, result) {
            if (err) {
              res.json({
                error: err
              })
            }
            if (result) {
              let token = jwt.sign({
                login: login
              }, 'tokenkey', (err, token) => {
                res.cookie("token", token)
                res.json({
                  token: token
                })
              })
            } 
            
          })
        } else {
          res.json({
            message: 'Admin not found'
          })
        }
      }).catch((err) => res.status(400).json("Error :" + err));
  }
 //______________________get all Delivery_____________________ 
const getAllDelivery = (req, res) => {
  DeliveryMan.find()
    .then(DeliveryInfos => {
      res.status(200).json(DeliveryInfos);
    }).catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error
      });
    });
};


//-------------------------Add Delivery-----------------------------
const addDelivery = (req, res) => {


      const fullName = req.body.fullName;
      const telephone = req.body.telephone;
      const type = "Standard";

 
      const DeliveryPush = new DeliveryMan({
          fullName,
          telephone,
          type,
          
      });
      DeliveryPush
      
          .save()
          .then(() => res.json("Delivery Man added successfully"))
          .catch((err) => res.status(400).json("Error :" + err));

}

//________________________updating Delivery____________________
const updateDelivery = (req, res) => {
  // Find Delivery By ID and update it
  DeliveryMan.updateOne({
      _id: req.params.id
    }, {
      fullName: req.body.fullName,
      telephone:req.body.telephone,
      type: req.body.type,
 
    })
    .then(() => res.status(201).json("Delivery Man updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};

//___________________________delete Delivery______________________
const deleteDelivery = (req, res) => {
  const {id} = req.params;
  DeliveryMan.findOneAndDelete({_id: id})
      .then(Delivery => {
          if(!Delivery) {
            res.status(404).json({
              message: "Does Not exist a Delivery with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a Delivery with id = ",
            error: err.message
          });
      });
};
//________________________Get DeliveryMan By id_______________________________
const getDeliveryById = (req, res) => {
  DeliveryMan.findById(req.params.id)
      .then(DeliveryMan => {
        res.status(200).json(DeliveryMan);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "DeliveryMan not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Category with id " + req.params.id,
              error: err
          });
      });
};
 //------------------------- Validate Order ----------------------------- 
const validateOrder = (req, res) => {
    
  Order.findByIdAndUpdate(
                   {_id: req.params.id},
                    {
                      shipped : true
                    }
                  )
  .then(() => res.status(201).json("Order updated successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
};
 //-------------------------get all orders-----------------------------  
const getAllOrder = (req, res) => {
  Order.find()
  .then(OrderInfos => {
        res.status(200).json(OrderInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
};
      // ______________________get orders by id__________________
      const getOrderById = (req, res) => {
        Order.findById(req.params.id)
                  .then((order) => res.json(order))
                  .catch((err) => res.status(400).json("Error :" + err));
      };
      
 //___________________________delete Order ______________________
const deleteOrder= (req, res) => {
  const {id} = req.params;
  Order.findOneAndDelete({_id: id})
      .then(Delivery => {
          if(!Delivery) {
            res.status(404).json({
              message: "Does Not exist a Order with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a Order with id = ",
            error: err.message
          });
      });
};     
 //-------------------------logout Admin and remove token-----------------------------   
 const logout = (req, res) => {
  const deconnect = res.clearCookie("token")

  res.json({
      message: 'User is Signout !!'
  })
} 
  module.exports={
    getAllAdmins,loginAdmin,addDelivery,getDeliveryById,updateDelivery,deleteDelivery,validateOrder,getAllOrder,getAllDelivery,getOrderById,deleteOrder,logout
};