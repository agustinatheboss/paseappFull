const mongoose = require('mongoose');

const tipoFrecuenciaSchema = new mongoose.Schema({
    descripcionFrecuencia: {
        type: String,
        required: true
    }
});

const TipoFrecuencia = mongoose.model('TipoFrecuencia', tipoFrecuenciaSchema);

module.exports = TipoFrecuencia;
