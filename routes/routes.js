const { ErrorHandler, handleError } = require('../services/error.service');
const productRoutes = require('./products.routes')

module.exports = (app) => {
    app.use('/api/v1/products', productRoutes)

}