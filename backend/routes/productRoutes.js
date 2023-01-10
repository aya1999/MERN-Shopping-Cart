const express = require('express')
const router = express.Router()

const{ getAllProducts, getProductById} = require('../controller/productControllers')

//@desc Get all products from db
//@route GET /api/products
router.get('/', getAllProducts)

//@desc Get a product by id from db
//@route GET /api/products/:id
router.get('/:id', getProductById)

module.exports = router;