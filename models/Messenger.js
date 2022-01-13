const mongoose = require("mongoose");

const MessengerSchema = new mongoose.Schema({
    name: {
        type:String,
        unique: false,
    },
    messagedesc :{
        type: String,
    },
},
{timestamps: true}
);

module.exports = mongoose.model("Messenger", MessengerSchema)