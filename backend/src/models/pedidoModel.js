const mongoose = require('mongoose');
const Proveedor = require('./proveedorModel').schema;
const EstadoPedido = require('./estadoPedidoModel').schema;
const User = require('./userModel').schema;
const Servicio = require('./servicioModel').schema;

const pedidoSchema = new mongoose.Schema({
    estadoPedido: {
        type: EstadoPedido,
        require:false
    },
    usuario: {
        type: User,
        require:false
    },
    servicio: {
        type: Servicio,
        require:false
    },
    proveedor: {
        type: Proveedor
    },
    horarioContacto: {
        type: String,
    },
    motivo: {
        type: String,
    }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
