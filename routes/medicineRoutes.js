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

router.post('/tapMedicine', 
    joinSchemaValidation.validateBody(medicineSchema.tapMedicine), 
    medicineController.tapMedicine
);

router.post('/getQtdeByName', 
    joinSchemaValidation.validateBody(medicineSchema.getQtdeByName), 
    medicineController.getQtdeByName
);

module.exports = router;