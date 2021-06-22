const constants = require('../constants');
const userService = require('../service/userServices');

module.exports.signup = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await userService.signup(req.body);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: signup', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.login = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        console.log(req.body)
        const responseFromService = await userService.login(req.body);
        response.status = 200;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body = responseFromService;
} catch (error) {
        console.log('Something went wrong: Controller: login', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getAllLowUsers = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await userService.getAllLowUsers(req.body);
        response.status = 200;
        response.message = constants.userMessage.GETALL_SUCCESS;
        response.body = responseFromService;
} catch (error) {
        console.log('Something went wrong: Controller: getAllLowUsers', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getUsersByEmail = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await userService.getUsersByEmail(req.body);
        response.status = 200;
        response.message = constants.userMessage.GETALL_SUCCESS;
        response.body = responseFromService;
} catch (error) {
        console.log('Something went wrong: Controller: getUsersByEmail', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.putLowIdOnHighUser = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await userService.putLowIdOnHighUser(req.body);
        response.status = 200;
        response.message = constants.userMessage.GETALL_SUCCESS;
        response.body = responseFromService;
} catch (error) {
        console.log('Something went wrong: Controller: putLowIdOnHighUser', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}