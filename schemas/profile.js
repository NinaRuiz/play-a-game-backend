const mongoose = require('mongoose');
const {Schema} = mongoose;

const profileSchema = new Schema({
    name: {type: String, unique: true},
    PIN: {type: Number},
    rol: {default: 'ROL_USER'}
});

const model = mongoose.model('profile', profileSchema);

module.exports = model;
