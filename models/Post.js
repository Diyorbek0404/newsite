const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: false,
    },
    likes:[{
        type:ObjectId,
    }],
    comments:[{
        text:String,
    }],
    CommentBy:{
        type: String,
        required: false,
    },
},
{ timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema)