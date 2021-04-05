const Admin = require('../models/Admin.model');
const Delivery = require('../models/Delivery.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


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
exports.DelivryList = (req, res) => {
  Delivery.find()
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
  const delivery = new Delivery({
    fullName: req.body.fullName,
    type: req.body.type,
 
  });
  //Save
  delivery.save().then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json({
      message: "Fail!",
      error: err.message
    });
  });
};

// ______________________get Delivery by id__________________
const getDeliveryById = (req, res) => {
  Delivery.findById(req.params.id)
      .then(Delivery => {
        res.status(200).json(Delivery);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Delivery not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Category with id " + req.params.id,
              error: err
          });
      });
};
//________________________updating Delivery____________________
const updateDelivery = (req, res) => {
  // Find Delivery By ID and update it
  Delivery.updateOne({
      _id: req.params.id
    }, {
      fullName: req.body.fullName,
      type: req.body.type,
 
    })
    .then(() => res.status(201).json("Delivery updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};

//___________________________delete Delivery______________________
const deleteDelivery = (req, res) => {
  const {id} = req.params;
  Delivery.findOneAndDelete({_id: id})
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

 
  module.exports={
    getAllAdmins,loginAdmin,addDelivery,getDeliveryById,updateDelivery,deleteDelivery
};