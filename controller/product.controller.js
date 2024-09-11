const Product = require('../model/product.model');

exports.addProduct = async (req, res) => {
    try {
        let product = await Product.create(req.body);
        res.send({ message: "product added successfully...", product });
    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error...");
    }
}


exports.getAllproducts = async (req, res) => {
    try {
        let products = await Product.find({ isDelete: false });
        res.send(products);
    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error...");
    }
}