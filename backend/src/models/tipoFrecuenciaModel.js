const mongoose = require('mongoose');

const tipoFrecuenciaSchema = new mongoose.Schema({
    descripcionFrecuencia: {
        type: String,
        enum: ['Única', 'Diaria', 'Semanal', 'Mensual'],
        required: true
    }
});

const TipoFrecuencia = mongoose.model('TipoFrecuencia', tipoFrecuenciaSchema);

module.exports = TipoFrecuencia;
