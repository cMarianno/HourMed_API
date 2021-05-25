const User = require('../database/models/userModel');
const constants = require('../constants');
const bcrypt = require('bcrypt');
const { formatMongoData } = require('../helper/dbHelper');
const jwt = require('jsonwebtoken');

module.exports.signup = async ({type, name, email, password}) =>{
    try{
        if(name == "")
            throw new Error(constants.userMessage.INVALID_NAME)

        if(type != "high" && type != "low")
            throw new Error(constants.userMessage.INVALID_TYPE)

        const user = await User.findOne({email});
        if (user){
            throw new Error(constants.userMessage.DUPLICATE_EMAIL)
        }

        password = await bcrypt.hash(password, 12);

        const newUser = new User({email, password, type});

        let result = await newUser.save();

        return formatMongoData(result);

    } catch (error) {
        console.log('Something went wrong: Service: signup', error);
        throw new Error(error);
    }
}

module.exports.login = async ({email, password}) =>{
    try{
        const user = await User.findOne({email});
        if (!user){
            throw new Error(constants.userMessage.USER_NOT_FOUND)
        }
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid){
            throw new Error(constants.userMessage.INVALID_PASSWORD);
        }

        const token = jwt.sign({id: user._id}, process.env.SECRET_KEY || 'my-secret-key', {expiresIn: '1d'});

        return {token};

    } catch (error) {
        console.log('Something went wrong: Service: login', error);
        throw new Error(error);
    }
}

module.exports.getAllLowUsers = async ({skip=0, limit=10}) => {
    try{
        var query = { type: "low" };
        let users = await User.find(query).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(users);
    } catch (error) {
        console.log('Something went wrong: Service: getAllLowUsers, error');
        throw new Error(error);
    }
}