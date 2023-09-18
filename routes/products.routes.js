const express = require('express');
const { getProducts, saveProduct, getProduct } = require('../controllers/Product.Controller');
const router = express.Router();

 router.get('/', getProducts)
 router.get('/:productId', getProduct)
 router.post('/save', saveProduct)
 router.put('/:productId', saveProduct)

 module.exports = router;