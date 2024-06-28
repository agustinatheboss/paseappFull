const mongoose = require('mongoose');
const User = require('./userModel').schema;
const Calificacion = require('./calificacionModel').schema;

const comentarioSchema = new mongoose.Schema({
    usuario: {
        type: User,
        required: true
    },
    descripcion: {
        type: String
    },
    estadoComentario: {
        type: String,
        enum: ['Aceptado','Rechazado','Pendiente'],
        required: true
    },
    calificacion: {
        type: Calificacion,
        required: true
    }
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
