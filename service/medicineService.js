const Medicine = require('../database/models/medicineModel');
const {formatMongoData, checkObjectId} = require('../helper/dbHelper');
const constants = require('../constants');
const mongoose = require('mongoose');

module.exports.addMedicine = async (serviceData) => {
    try{
       let medicine = new Medicine({ ...serviceData});
       let result = await medicine.save();
       return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong: Service: addMedicine', error);
        throw new Error(error);
    }
}