// src/models/tipoMascotaModel.js
const mongoose = require('mongoose');

const tipoMascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
});

const TipoMascota = mongoose.model('TipoMascota', tipoMascotaSchema);

module.exports = TipoMascota;
