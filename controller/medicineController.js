const medicineService = require('../service/medicineService');
const constants = require('../constants')

module.exports.addMedicine = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await medicineService.addMedicine(req.body);
        response.status = 200;
        response.message = constants.medicineMessage.ADD_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something wrong: Controller: addMedicine', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}