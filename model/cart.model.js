const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    quentity: {
        type: Number
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: true
    })


module.exports = mongoose.model('carts', cartSchema);