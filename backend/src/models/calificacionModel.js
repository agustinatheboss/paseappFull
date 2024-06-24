// src/models/calificacionModel.js
const mongoose = require('mongoose');

const calificacionSchema = new mongoose.Schema({
    numeroCalificacion: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true
    }
});

const Calificacion = mongoose.model('Calificacion', calificacionSchema);

module.exports = Calificacion;
