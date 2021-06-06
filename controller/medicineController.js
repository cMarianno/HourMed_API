const medicineService = require('../service/medicineService');
const constants = require('../constants')

module.exports.getMedicineByID = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try {
        const responseFromService = await medicineService.getMedicineByID(req.body);
        console.log(responseFromService)
        response.name = responseFromService.name;
        response.status = 200;
        response.message = constants.medicineMessage.SEARCH_SUCCESS;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something wrong: Controller: getMedicineByID', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

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

module.exports.deleteMedicine = async (req, res) => {
    let response = {...constants.defaultServerResponse};
    try {
      const responseFromService = await productService.deleteMedicine(req.params);
      response.status = 200;
      response.message = constants.medicineMessage.DELETE_SUCCESS;
      response.body = responseFromService;
    } catch (error) {
        console.log('Something wrong: Controller: deleteMedicine', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}