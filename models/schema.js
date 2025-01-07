const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    id:{
        type: String,
        required: true,
        unique: true,
    },

    name: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    imageie: {
        type: String,
        required: true,
    },
    power:{
        type: [String],
        required:false,
    },
    colortemp:{
        type: [String],
        required:false,
    },

    size: {
        required: false,
        type: [String],
    },
    colors: {
        type: [String],
        required: false,
    },
    
    featured: {
        type: Boolean,
        default: false,
    },

    typeo: {
        type: String,
    },
    dimension: {
        type: String,
    },
    
    subcategory:{
        type: String,
    },
    
});



module.exports = mongoose.model('Product',productSchema)
