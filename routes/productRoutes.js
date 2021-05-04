//Parte do Postman
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joinSchemaValidation = require('../middleware/joinSchemaValidation');
const productSchema = require('../apiSchema/productSchema');
const tokenValidation = require('../middleware/tokenValidation');

router.post('/', 
    tokenValidation.validationToken,
    joinSchemaValidation.validateBody(productSchema.createProductSchema), 
    productController.createProduct
);
/* Para testar no postman */

router.get('/:id',
    tokenValidation.validationToken,
    productController.getProductById
)

router.get('/',
    tokenValidation.validationToken,
    tokenValidation.validationToken,
    joinSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
    productController.getAllProducts);

router.put('/:id',
    tokenValidation.validationToken,
    joinSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct
)

router.delete('/:id',
    tokenValidation.validationToken,
    productController.deleteProduct
)

module.exports = router;