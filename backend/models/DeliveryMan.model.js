const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DeliveryMan = new Schema({
    fullName: {
            type: String,
            required: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            trim: true,
        },
        telephone: {
            type: Number,
            required: true,
            trim: true,
        }
    }

);

const DeliveryManList = mongoose.model("DeliveryMan", DeliveryMan);
module.exports = DeliveryManList;