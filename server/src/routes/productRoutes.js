/**
 * @author Parth Parmar <parth.parmar@dal.ca>
 *
 */
const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const ProductService = require('src/services/ProductService');
const ProductController = require('src/controllers/ProductController');
const productController = new ProductController(new ProductService());
const { authenticateRoute } = require('src/helpers/auth');
const productSchema = require('../helpers/validate/productSchema');

/**
 * GET: /api/products endpoint to get records for provided userId and jobname
 * Possible outcomes:
 * Successfully fetches all records { "success": true, "statusCode": 200, "result": [] }
 * SQL Errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router
  .route(`/`)
  .get(validate(productSchema.getProductByName), productController.getAll)
  .post(validate(productSchema.createProduct), productController.create);

/**
 * GET: /api/products/:productId
 */
router
  .route(`/:productId`)
  .get(validate(productSchema.getProductById), productController.getProductById)
  .put(validate(productSchema.updateProduct), productController.update)
  .delete(validate(productSchema.deleteProduct), productController.deleteProduct);

module.exports = router;
