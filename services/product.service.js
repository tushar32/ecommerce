const Product = require("../models/Product");
const { TE } = require("./util.service");


const getProducts = async (query) => {

    try {
        let searchParams = {}
        if(query.q) {
            searchParams = {
                title: new RegExp(query.q, 'i')
            }
        }
        const products = await Product.find(searchParams).exec()

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

        const product = await Product.findByIdAndUpdate({_id: id}, formData)

        return product
    } catch(error) {
        if (error) TE(error.message);
    }
}

module.exports = { getProducts, saveProduct, editProduct, getProductById }