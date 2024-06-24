// src/models/servicioModel.js
const mongoose = require('mongoose');
const EstadoServicio = require('./estadoServicioModel');
const CategoriaServicio = require('./categoriaServicioModel');
const TipoMascota = require('./tipoMascotaModel');
const TipoFrecuencia = require('./tipoFrecuenciaModel');
const Zona = require('./zonaModel');
const Proveedor = require('./proveedorModel');
const Comentario = require('./comentarioModel');

const servicioSchema = new mongoose.Schema({
    estadoServicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EstadoServicio',
        required: true
    },
    categoriaServicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoriaServicio',
        required: true
    },
    tipoMascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoMascota',
        required: true
    },
    frecuencia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoFrecuencia',
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFinal: {
        type: Date
    },
    zona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zona',
        required: true
    },
    calificacion: {
        type: Number
    },
    proveedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proveedor',
        required: true
    },
    idServicio: {
        type: Number
    },
    comentarios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comentario'
    }]
});

const Servicio = mongoose.model('Servicio', servicioSchema);

module.exports = Servicio;
