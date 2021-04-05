const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuperAdmin = new Schema(
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
},
 {
    versionKey: false
});

const SuperAdminList = mongoose.model("SuperAdmin",SuperAdmin);
module.exports=SuperAdminList;