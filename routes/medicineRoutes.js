//Parte do Postman
const express = require('express');
const router = express.Router();
const medicineController = require('../controller/medicineController');
const joinSchemaValidation = require('../middleware/joinSchemaValidation');
const medicineSchema = require('../apiSchema/medicineSchema');

router.post('/addMedicine', 
    joinSchemaValidation.validateBody(medicineSchema.addMedicine), 
    medicineController.addMedicine
);

module.exports = router;