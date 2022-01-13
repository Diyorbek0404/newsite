const mongoose = require("mongoose");

const ChildrenSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    fathername:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    },
    photo:{
        type:String,
    },
    selectAge:{
        type:String,
        required: true
    },
    sinf:{
        type:String,
        required: true
    },
    yutuq:{
        type:String,
        required: true
    },
},
{
    timestamps: true
},
)

module.exports = mongoose.model("ChildrenPost", ChildrenSchema)