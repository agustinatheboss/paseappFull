
const mongoose = require('mongoose');

const tipoMascotaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        enum: ['Perro', 'Gato', 'Peces'],
        required: true
    }
});

const TipoMascota = mongoose.model('TipoMascota', tipoMascotaSchema);

module.exports = TipoMascota;
