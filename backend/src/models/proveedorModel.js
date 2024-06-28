// src/models/proveedorModel.js
const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
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
