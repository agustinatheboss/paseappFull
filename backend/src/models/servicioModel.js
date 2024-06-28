const mongoose = require('mongoose');
const EstadoServicio = require('./estadoServicioModel');
const CategoriaServicio = require('./categoriaServicioModel').schema;
const TipoMascota = require('./tipoMascotaModel').schema;
const TipoFrecuencia = require('./tipoFrecuenciaModel').schema;
const Zona = require('./zonaModel').schema;
const Proveedor = require('./proveedorModel').schema;
const Comentario = require('./comentarioModel').schema;
const Calificacion = require('./calificacionModel').schema;
const User = require('./userModel');

const servicioSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    price: {
        type: Number
    },
    serviceStatus: {
        type: mongoose.Schema.Types,
        ref: 'ServiceStatus'
    },
    serviceCategory: {
        type: CategoriaServicio
    },
    petType: {
        type: TipoMascota
    },
    frequencyType: {
        type: TipoFrecuencia
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    zone: {
        type: Zona
    },
    calification: {
        type: Calificacion
    },
    petsitter: {
        type: Proveedor
    },
    comments: [{type: Comentario
    }]
});

const Servicio = mongoose.model('Servicio', servicioSchema);

module.exports = Servicio;
