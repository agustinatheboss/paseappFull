const mongoose = require('mongoose');
const Mascota = require('./mascotaModel');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    idUsuer: {
        type: Number,
    },
    pets: [{
        type: Mascota.schema // Guarda los objetos completos de Mascota como subdocumentos
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
