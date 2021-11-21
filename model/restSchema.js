const mongoose = require('mongoose');
//require('mongoose-type-url');

const { Schema } = mongoose;

const restSchema = new Schema({
    URL:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    address_line_2: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    outcode: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    type_of_food: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Restaurants", restSchema);