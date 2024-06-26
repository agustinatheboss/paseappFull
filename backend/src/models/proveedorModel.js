// src/models/proveedorModel.js
const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    idUsuario: {
        type: Number
    },
    profileDescription: {
        type: String
    }
});

const Proveedor = mongoose.model('Proveedor', proveedorSchema);

module.exports = Proveedor;
