const mongoose = require('mongoose');
const User = require('./userModel');
const Calificacion = require('./calificacionModel');

const comentarioSchema = new mongoose.Schema({
    idComentario: {
        type: Number
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    descripcion: {
        type: String
    },
    estadoComentario: {
        type: String,
        enum: ['Aceptado', 'Rechazado'],
        required: true
    },
    calificacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Calificacion',
        required: true
    }
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
