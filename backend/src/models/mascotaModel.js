// src/models/mascotaModel.js
const mongoose = require('mongoose');


const mascotaSchema = new mongoose.Schema({
    pets: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'TipoMascota',
        type: String,
        enum: ['Perro', 'Gato', 'Peces'],
        required: true
    },
    noPets: {
        type: Number,
        required: true
    }
});

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;
