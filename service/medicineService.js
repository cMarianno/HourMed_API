const Medicine = require('../database/models/medicineModel');
const {formatMongoData, checkObjectId} = require('../helper/dbHelper');
const constants = require('../constants');
const mongoose = require('mongoose');

module.exports.getMedicineByID = async ({low_id}) => {
    try{
        var query = { low_id: low_id };
        let result = await Medicine.findOne(query);
        return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong: Service: getMedicineByID', error);
        throw new Error(error);
    }
}

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

module.exports.deleteMedicine = async ({id}) => {
    try{
       checkObjectId(id);
       let medicine = await MEdicine.findByIdAndDelete(id);
       if (!medicine){
           throw new Error(constants.medicineMessage.DELETE_SUCCESS);
       }
       return formatMongoData(medicine);
    } catch (error) {
        console.log('Something went wrong: Service: deleteMedicine', error);
        throw new Error(error);
    }
}