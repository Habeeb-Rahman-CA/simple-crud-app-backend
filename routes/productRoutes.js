const express = require("express")
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require("../controllers/productController")
const router = express.Router()

router.route('/').post(createProduct).get(getAllProducts)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router