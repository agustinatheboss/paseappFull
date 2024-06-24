const EstadoServicio = require('../models/estadoServicioModel');

const createEstadoServicio = async (req, res) => {
    try {
        const estadoServicio = new EstadoServicio(req.body);
        await estadoServicio.save();
        res.status(201).json(estadoServicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getEstadoServicios = async (req, res) => {
    try {
        const estadoServicios = await EstadoServicio.find();
        res.json(estadoServicios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getEstadoServicioById = async (req, res) => {
    try {
        const estadoServicio = await EstadoServicio.findById(req.params.id);
        if (!estadoServicio) {
            return res.status(404).json({ message: 'EstadoServicio not found' });
        }
        res.json(estadoServicio);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateEstadoServicio = async (req, res) => {
    try {
        const estadoServicio = await EstadoServicio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!estadoServicio) {
            return res.status(404).json({ message: 'EstadoServicio not found' });
        }
        res.json(estadoServicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteEstadoServicio = async (req, res) => {
    try {
        const estadoServicio = await EstadoServicio.findByIdAndDelete(req.params.id);
        if (!estadoServicio) {
            return res.status(404).json({ message: 'EstadoServicio not found' });
        }
        res.json({ message: 'EstadoServicio deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createEstadoServicio,
    getEstadoServicios,
    getEstadoServicioById,
    updateEstadoServicio,
    deleteEstadoServicio,
};
