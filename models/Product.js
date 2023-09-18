const mongoose = require('mongoose');

const ProductSchema =  new mongoose.Schema({
    title : {
        type : String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    alias : {
        type : String,
    },
    keywords : {
        type : String
    },
    itemcode: {
        type : String
    },
    date: {
        type: Date,
        default: Date.now()   
    }
    
});

module.exports = Product = mongoose.model('products',ProductSchema);