const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    type: String,
    name: String,
    email: String,
    lowID: String,
    password: String
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret;
        }
    }
    });

module.exports = mongoose.model('User', UserSchema);