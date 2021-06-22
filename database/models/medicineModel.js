const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: String,
    date_to: String,
    date_from: String,
    interval: String,
    low_id: String,
    qtde: Number
}, {
    timestamps: true,
    versionKey: false
    });

module.exports = mongoose.model('Medicine', medicineSchema);