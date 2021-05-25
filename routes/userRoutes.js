const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const joinSchemaValidation = require('../middleware/joinSchemaValidation');
const userSchema = require('../apiSchema/userSchema')

router.post('/signup', 
    joinSchemaValidation.validateBody(userSchema.signup),
    userController.signup
);

router.post('/login',
    joinSchemaValidation.validateBody(userSchema.login),
    userController.login
);

router.post('/getAll',
    joinSchemaValidation.validateBody(userSchema.getAllLowUsers),
    userController.getAllLowUsers
);

module.exports = router;