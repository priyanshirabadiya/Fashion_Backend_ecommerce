const express = require('express');
const userRoutes = express.Router();

const {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    deleteUser,
    updatePassword,
    getAllUsers
} = require('../controller/user.controller');
const { verifyToken } = require('../helpers/verifyToken')

userRoutes.post('/register', registerUser);

userRoutes.get('/login', loginUser);

userRoutes.get('/all', getAllUsers);

userRoutes.get('/profile', verifyToken, getProfile);

userRoutes.put('/update', verifyToken, updateProfile);

userRoutes.delete('/deleteUser', verifyToken, deleteUser);

userRoutes.put('/newpassword', verifyToken, updatePassword);

module.exports = userRoutes;