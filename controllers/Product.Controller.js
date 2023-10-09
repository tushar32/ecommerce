const { ErrorHandler } = require("../services/error.service");
const productService = require("../services/product.service");
const { to, ReE, ReS } = require("../services/util.service");


const getProducts = async (req,res, next) => {
    let err, products;
    let start = new Date();
    
    //console.log(req.query)
    [err, products] = await to(productService.getProducts(req.query));
    if (err) return ReE(res, err, 200);
    // if (err) {
    //     return  next(err);
    // }
    return ReS(res,{
        message: "Successful",
        response: products,
        },200,start);
}

const getProduct = async (req,res) => {
    let err, product;
    let start = new Date();
   
    [err, product] = await to(productService.getProductById(req.params));
    if (err) return ReE(res, err, 200);
    return ReS(res,{
        message: "Successful",
        response: product,
        },200,start);
}

const saveProduct = async (req,res) => {
    let err, product;
    let start = new Date();
    
    const formData = req.body;
    const {
        params: { productId }
      } = req
   
      console.log('productId', productId)
    if(productId)
        [err, product] = await to(productService.editProduct(productId, formData));
    else
        [err, product] = await to(productService.saveProduct(formData));

    
    console.log(product)
    if (err) {
        throw new ErrorHandler(200, err)
    }
    return ReS(res,{
        message: "Successful",
        response: product,
        },200,start);
}

module.exports={getProducts, saveProduct, getProduct}