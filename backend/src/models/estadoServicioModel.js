// src/models/estadoServicioModel.js
const mongoose = require('mongoose');

const estadoServicioSchema = new mongoose.Schema({
    tipoEstadoServicio: {
        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        required: true
    }
});

const EstadoServicio = mongoose.model('EstadoServicio', estadoServicioSchema);

module.exports = EstadoServicio;
