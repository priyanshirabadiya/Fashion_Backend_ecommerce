const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    mobileNo: {
        type: Number,
    },
    profileImage: {
        type: String,
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('users', userSchema);