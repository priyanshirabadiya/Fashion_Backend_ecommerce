const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String
    },
    price: {
        type: Number
    },
    offers: {
        type: Boolean,
        default: false
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
{
    versionkey: false,
    timestamps: true
}
)

module.exports = mongoose.model('products', productSchema);