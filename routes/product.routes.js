const express = require('express');
const routes = express.Router();

const {verifyToken} = require('../helpers/verifyToken.js')

const {
    addProduct,
    getAllproducts
} = require('../controller/product.controller.js');

const {
    addToCart,
    getAllCarts,
    updateCart,
    deleteCart
} = require('../controller/carts.controller');

// ------------------- product ----------------

routes.post('/addproduct', addProduct)

routes.get('/allproduct', getAllproducts)

// -------------------- cart ------------------

routes.post('/addcart', verifyToken, addToCart);

routes.put('/updatecart', verifyToken, updateCart);

routes.get('/allcart', verifyToken, getAllCarts);

routes.delete('/deletecart', verifyToken, deleteCart);



module.exports = routes;

