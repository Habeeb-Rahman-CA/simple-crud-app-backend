const Product = require("../models/productModel");

const createProduct = async (req, res) => {
    console.log(req.body);
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getAllProducts = async (req, res) =>{
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const getProduct = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const updateProduct = async (req, res) =>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
        const updatedProducts = await Product.findById(req.params.id)
        res.status(200).json(updatedProducts)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const deleteProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json(product)
    } catch (err){
        res.status(500).json({message: err.message})
    }
}

module.exports = { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct }