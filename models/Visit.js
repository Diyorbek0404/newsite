const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaOptions = {
    timestams: {
        createdAt:"created_at", updatedAt: "updated_at"
    },
};
const  visitSchema = new schema({

    counter:{
        type:Number,
        require: true
    }
}, schemaOptions);

const visits = mongoose.model("visits", visitSchema, "visit");

module.exports = visits;
