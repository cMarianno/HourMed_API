const Joi = require('@hapi/joi');

module.exports.signup = Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    lowID: Joi.string().required(),
    password: Joi.string().required()
});

module.exports.login = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
});

module.exports.getAllLowUsers = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string()
});

module.exports.getUsersByEmail = Joi.object().keys({
    email: Joi.string().required()
});

module.exports.putLowIdOnHighUser = Joi.object().keys({
    lowID: Joi.string().required(),
    email: Joi.string().required()
});