const Cart = require('../model/cart.model');

exports.addToCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            productId: req.body.productId,
            isDelete: false
        })
        if (cart) {
            res.send({ message: "Item is already in cart..." });
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        res.status(201).json({ message: "Item is added to cart...", cart })
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
}


exports.updateCart = async (req, res) => {
    try {
        let userId = req.user._id;
        let cartId = req.body._cartId; // Assuming `_cartId` is provided in the request body
        // _id and user will get from maincart data 
        let cart = await Cart.findOne({ _id: cartId, user: userId, isDelete: false });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found or you do not have permission to update this cart." });
        }
        let updatedCart = await Cart.findByIdAndUpdate(
            cartId,
            { $set: req.body },
            { new: true }
        );
        res.json({ message: "Cart updated successfully...", updatedCart });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
};


exports.deleteCart = async (req, res) => {
    try {
        let cartId = req.body._cartId;
        let deletecart = await Cart.findByIdAndUpdate(cartId, { isDelete: true }, { new: true });
        res.json({ message: "Item is removed from cart...", deletecart })
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
}


exports.getAllCarts = async (req, res) => {
    try {
        let carts = await Cart.find({ user: req.user._id, isDelete: false });
        if (!carts) {
            return res.send({ message: "Your cart is empty..." });
        }
        res.send(carts);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server error...");
    }
}

