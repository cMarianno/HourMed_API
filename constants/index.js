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
        INVALID_ID: 'Invalid ID'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Sucess',
        DUPLICATE_EMAIL: 'User already exist with giver email'
    }
}
