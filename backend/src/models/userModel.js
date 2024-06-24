const mongoose = require('mongoose');
const Mascota = require('./mascotaModel');

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    mailUsuario: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    domicilio: {
        type: String,
    },
    idUsuario: {
        type: Number,
    },
    mascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota' // Referencia al modelo 'Mascota'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
