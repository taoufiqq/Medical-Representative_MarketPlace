const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Seller = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        login: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        document: {
            type : String,
            required : true,
            trim : true,
        },
        status : {
            type : String,
            required : true,
            trim : true,
        },
        type : {
            type : String,
            required : true,
            trim : true,
        },
    }
);
const sellerList = mongoose.model("Seller",Seller);
module.exports = sellerList;