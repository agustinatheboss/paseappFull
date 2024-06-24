// src/models/estadoServicioModel.js
const mongoose = require('mongoose');

const estadoServicioSchema = new mongoose.Schema({
    tipoEstadoServicio: {
        type: String,
        enum: ['Publicado', 'NoPublicado'],
        required: true
    }
});

const EstadoServicio = mongoose.model('EstadoServicio', estadoServicioSchema);

module.exports = EstadoServicio;
