module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage:{
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_FETCHED: 'Product Fetched Successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found',
        PRODUCT_UPDATE: 'Product Update Successfully',
        PRODUCT_DELETE: 'Product Deleted Successfully'
    },
    requestValidationMessage:{
        BAD_REQUEST: 'Invalid fields',
        INVALID_ID: 'Invalid ID',
        TOKEN_MISSING: 'Token missing from header'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Sucess',
        DUPLICATE_EMAIL: 'User already exist with giver email',
        LOGIN_SUCCESS: 'Login Success',
        USER_NOT_FOUND: 'User Not Found',
        INVALID_PASSWORD: 'Invalid Password',
        INVALID_TYPE: 'Invalid Type',
        INVALID_NAME: 'Invalid Name',
        GETALL_SUCCESS: 'Get All Users Success',
    },
    medicineMessage: {
        ADD_SUCCESS: 'Medicine Added',
        SEARCH_SUCCESS: 'Medicine Search',
        DELETE_SUCCESS: 'Medicine Deleted Successfully'
    }
}
