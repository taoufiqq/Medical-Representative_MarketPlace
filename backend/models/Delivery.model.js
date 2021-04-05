const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Delivery = new Schema({
    fullName: {
            type: String,
            required: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            trim: true,
        }
    }

);

const deliveryList = mongoose.model("Delivery", Delivery);
module.exports = deliveryList;