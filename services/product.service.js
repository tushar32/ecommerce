const Product = require("../models/Product");
const { TE } = require("./util.service");


const getProducts = async () => {

    try {
        const products = await Product.find({})

        return products
    } catch(error) {
        if (error) TE(error.message);
    }
}

const getProductById = async ({productId}) => {

    try {
        const product = await Product.findById(productId)

        return product
    } catch(error) {
        if (error) TE(error.message);
    }
}


const saveProduct = async (formData) => {
    try {

        const ProductModel=  new Product(formData)
        const respnse = await ProductModel.save(formData)

        return respnse
    } catch(error) {
        if (error) TE(error.message);
    }
}

const editProduct = async (id, formData) => {
    try {
        console.log('formData', formData)
        console.log('id', id)

        const product = await Product.findByIdAndUpdate(id, formDat)

        return product
    } catch(error) {
        if (error) TE(error.message);
    }
}

module.exports = { getProducts, saveProduct, editProduct, getProductById }