// src/models/pedidoModel.js
const mongoose = require('mongoose');
const EstadoPedido = require('./estadoPedidoModel');
const User = require('./userModel');
const Servicio = require('./servicioModel');

const pedidoSchema = new mongoose.Schema({
    estadoPedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EstadoPedido',
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    servicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servicio',
        required: true
    },
    horarioContacto: {
        type: String,
        required: true
    },
    motivo: {
        type: String,
        required: true
    }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
