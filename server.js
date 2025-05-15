const express = require('express');
const connectDb = require('./config/dbConnection');
const Product = require('./models/productModel');
const dotenv = require('dotenv').config();
// Tesing git commit by roushi
connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/productRoutes'));

app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});
