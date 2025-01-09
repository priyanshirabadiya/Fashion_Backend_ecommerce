const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*', // Or specify your frontend's URL for better security
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send("Welcome To Express backend-ecommerce server...");
})

app.use("/user", userRoutes);

app.use("/product" , productRoutes);

app.listen(port, '0.0.0.0', () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connection established successfully")
        })
        .catch((err) => console.log(err))
    console.log(`app Start At http://localhost:${port}`)
})

module.exports = app;
