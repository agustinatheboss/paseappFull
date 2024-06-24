// src/models/zonaModel.js
const mongoose = require('mongoose');

const zonaSchema = new mongoose.Schema({
    nombreZona: {
        type: String,
        required: true
    }
});


const Zona = mongoose.model('Zona', zonaSchema);

module.exports = Zona;
