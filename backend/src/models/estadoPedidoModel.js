// src/models/estadoPedidoModel.js
const mongoose = require('mongoose');

const estadoPedidoSchema = new mongoose.Schema({
    tipoEstadoPedido: {
        type: String,
        enum: ['Solicitado', 'Aceptado', 'Rechazado', 'Finalizado'],
        required: true
    }
});

const EstadoPedido = mongoose.model('EstadoPedido', estadoPedidoSchema);

module.exports = EstadoPedido;
