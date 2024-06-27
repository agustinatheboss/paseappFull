// src/models/pedidoModel.js
const mongoose = require('mongoose');
const EstadoPedido = require('./estadoPedidoModel').schema;
const User = require('./userModel').schema;
const Servicio = require('./servicioModel').schema;

const pedidoSchema = new mongoose.Schema({
    estadoPedido: {
        type: EstadoPedido,
        required: true
    },
    usuario: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'User',
        type: User,
        required: true
    },
    servicio: {
        type: Servicio,
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
