// src/models/mascotaModel.js
const mongoose = require('mongoose');


const mascotaSchema = new mongoose.Schema({
    tipoMascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoMascota',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    }
});

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;
