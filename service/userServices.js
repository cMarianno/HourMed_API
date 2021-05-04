const User = require('../database/models/userModel');
const constants = require('../constants');
const bcrypt = require('bcrypt');
const { formatMongoData } = require('../helper/dbHelper');

module.exports.signup = async ({email, password}) =>{
    try{
       const user = await User.findOne({email});
       if (user){
           throw new Error(constants.userMessage.DUPLICATE_EMAIL)
       }

       password = await bcrypt.hash(password, 12);

       const newUser = new User({email, password});


       let result = await newUser.save();

       return formatMongoData(result);

    } catch (error) {
        console.log('Something went wrong: Service: signup', error);
        throw new Error(error);
    }
}