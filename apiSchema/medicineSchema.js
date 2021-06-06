const Joi = require('@hapi/joi');

module.exports.addMedicine = Joi.object().keys({
    name: Joi.string().required(),
    date_to: Joi.string(),
    date_from: Joi.string(),
    interval: Joi.string().required(),
    low_id: Joi.string().required()
});

module.exports.getMedicineByID = Joi.object().keys({
    low_id: Joi.string().required()
});