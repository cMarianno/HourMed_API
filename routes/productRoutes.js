//Parte do Postman
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joinSchemaValidation = require('../middleware/joinSchemaValidation');
const productSchema = require('../apiSchema/productSchema');


router.post('/', 
    joinSchemaValidation.validateBody(productSchema.createProductSchema), 
    productController.createProduct
);
/* Para testar no postman */

router.get('/:id',
    productController.getProductById
)

router.get('/', 
    joinSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
    productController.getAllProducts);

router.put('/:id',
    joinSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct
)

router.delete('/:id',
    productController.deleteProduct
)

module.exports = router;