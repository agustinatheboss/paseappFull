const mongoose = require('mongoose');
const EstadoServicio = require('./estadoServicioModel').schema;
const CategoriaServicio = require('./categoriaServicioModel').schema;
const TipoMascota = require('./tipoMascotaModel').schema;
const TipoFrecuencia = require('./tipoFrecuenciaModel').schema;
const Zona = require('./zonaModel').schema;
const Proveedor = require('./proveedorModel').schema;
const Comentario = require('./comentarioModel').schema;
const Calificacion = require('./calificacionModel').schema;

const servicioSchema = new mongoose.Schema({
    serviceStatus: {
        type: EstadoServicio,
        required: true
    },
    serviceCategory: {
        type: CategoriaServicio,
        required: true
    },
    petType: {
        type: TipoMascota,
        required: true
    },
    frequencyType: {
        type: TipoFrecuencia,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    zone: {
        type: Zona,
        required: true
    },
    qualification: {
        type: Calificacion
    },
    provider: {
        type: Proveedor,
        required: true
    },
    comment: [{
        type: Comentario
    }]
});

const Servicio = mongoose.model('Servicio', servicioSchema);

module.exports = Servicio;
