const Servicio = require('../models/servicioModel');

const createServicio = async (req, res) => {
    try {
        const servicio = new Servicio(req.body);
        await servicio.save();
        res.status(201).json(servicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getServicioById = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio not found' });
        }
        res.json(servicio);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio not found' });
        }
        res.json(servicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndDelete(req.params.id);
        if (!servicio) {
            return res.status(404).json({ message: 'Servicio not found' });
        }
        res.json({ message: 'Servicio deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createServicio,
    getServicios,
    getServicioById,
    updateServicio,
    deleteServicio,
};
