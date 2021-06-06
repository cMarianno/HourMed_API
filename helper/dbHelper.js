const constants = require('../constants');
const mongoose = require('mongoose');

module.exports.formatMongoData = (data) => {
    if (Array.isArray(data)){
        let newDataList = [];
        for (value of data){
            console.log(value);
            newDataList.push(value.toObject());
        }
        return newDataList;
    }
    return data;
}

module.exports.checkObjectId = (id) => {
     if (!mongoose.Types.ObjectId.isValid(id)) {
           throw new Error(constants.requestValidationMessage.INVALID_ID);
       }
}