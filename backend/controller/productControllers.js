const Product = require('../models/Product')

//async function to get all products from db
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}

//async function to get product by id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {
    getAllProducts,
    getProductById
}