const EstadoPedido = require('../models/estadoPedidoModel');

const createEstadoPedido = async (req, res) => {
    try {
        const estadoPedido = new EstadoPedido(req.body);
        await estadoPedido.save();
        res.status(201).json(estadoPedido);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getEstadoPedidos = async (req, res) => {
    try {
        const estadoPedidos = await EstadoPedido.find();
        res.json(estadoPedidos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getEstadoPedidoById = async (req, res) => {
    try {
        const estadoPedido = await EstadoPedido.findById(req.params.id);
        if (!estadoPedido) {
            return res.status(404).json({ message: 'EstadoPedido not found' });
        }
        res.json(estadoPedido);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateEstadoPedido = async (req, res) => {
    try {
        const estadoPedido = await EstadoPedido.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!estadoPedido) {
            return res.status(404).json({ message: 'EstadoPedido not found' });
        }
        res.json(estadoPedido);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteEstadoPedido = async (req, res) => {
    try {
        const estadoPedido = await EstadoPedido.findByIdAndDelete(req.params.id);
        if (!estadoPedido) {
            return res.status(404).json({ message: 'EstadoPedido not found' });
        }
        res.json({ message: 'EstadoPedido deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createEstadoPedido,
    getEstadoPedidos,
    getEstadoPedidoById,
    updateEstadoPedido,
    deleteEstadoPedido,
};
