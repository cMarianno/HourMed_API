//Parte do Postman
const express = require('express');
const router = express.Router();
const medicineController = require('../controller/medicineController');
const joinSchemaValidation = require('../middleware/joinSchemaValidation');
const medicineSchema = require('../apiSchema/medicineSchema');

router.post('/getMedicineByID', 
    joinSchemaValidation.validateBody(medicineSchema.getMedicineByID), 
    medicineController.getMedicineByID
);

router.post('/addMedicine', 
    joinSchemaValidation.validateBody(medicineSchema.addMedicine), 
    medicineController.addMedicine
);

router.delete('/:deleteMedicine',
    medicineController.deleteMedicine
);

module.exports = router;