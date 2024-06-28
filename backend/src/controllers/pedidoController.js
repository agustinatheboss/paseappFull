const Pedido = require('../models/pedidoModel');

const createPedido = async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).json(pedido);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPedidoById = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido not found' });
        }
        res.json(pedido);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updatePedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido not found' });
        }
        res.json(pedido);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const getPedidoByIdUsuario = async (req, res) => {
    try {
        const pedidos = await Pedido.find({ 'usuario._id': req.params.id });

        if (pedidos.length === 0) {
            return res.status(404).json({ message: 'No orders found for the given user' });
        }

        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}; 
const getPedidoByIdProveedor = async (req, res) => {
    try {
        const pedidos = await Pedido.find({ 'proveedor._id': req.params.id });

        if (pedidos.length === 0) {
            return res.status(404).json({ message: 'No orders found for the given provider' });
        }

        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deletePedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido not found' });
        }
        res.json({ message: 'Pedido deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createPedido,
    getPedidos,
    getPedidoById,
    updatePedido,
    deletePedido,
    getPedidoByIdProveedor,
    getPedidoByIdUsuario
};

