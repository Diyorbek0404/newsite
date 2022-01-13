const mongoose = require("mongoose")

const YutuqSchema = new mongoose.Schema({
    photo:{
        type: String,
        required: true,
    },
},
{ timestamps: true}
);

module.exports = mongoose.model("Yutuq", YutuqSchema)