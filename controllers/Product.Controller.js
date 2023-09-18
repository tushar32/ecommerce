const productService = require("../services/product.service");
const { to, ReE, ReS } = require("../services/util.service");


const getProducts = async (req,res) => {
    let err, products;
    let start = new Date();
    
    [err, products] = await to(productService.getProducts());
    if (err) return ReE(res, err, 200);
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
        params: { id },
        body
      } = req
   
    if(id)
        [err, product] = await to(productService.saveProduct(formData));
    else
        [err, product] = await to(productService.editProduct(id, formData));

        

    console.log(product)
    if (err) return ReE(res, err, 200);
    return ReS(res,{
        message: "Successful",
        response: product,
        },200,start);
}

module.exports={getProducts, saveProduct, getProduct}