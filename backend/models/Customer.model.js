const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Customer = new Schema(
    {
        firstName : {
            type : String,
            required : true,
            trim : true,
        },
        lastName : {
            type : String,
            required : true,
            trim : true,
        },
        email : {
            type : String,
            required : true,
            trim : true,
        },
        login : {
            type : String,
            required : true,
            trim : true,
        },
        password : {
            type : String,
            required : true,
            trim : true,
        },
        status : {
            type : String,
            required : true,
            trim : true,
        },
        role : {
            type : String,
            required : true,
            trim : true,
        },
        verified : {
            type : Boolean,
            required : true,
            trim : true,
        }
    }
);
const customerList = mongoose.model("Customer", Customer);
module.exports = customerList;