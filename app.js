const express = require('express');
const morgan = require('morgan');
const server = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const port = process.env.PORT;

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*', // Or specify your frontend's URL for better security
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
}));

server.get('/', (req, res) => {
    res.send("Welcome To Express backend-ecommerce Server...");
})

server.use("/user", userRoutes);

server.use("/product" , productRoutes);

server.listen(port, '0.0.0.0', () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connection established successfully")
        })
        .catch((err) => console.log(err))
    console.log(`Server Start At http://localhost:${port}`)
})
