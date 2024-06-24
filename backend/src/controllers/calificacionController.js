const Calificacion = require('../models/calificacionModel');

const createCalificacion = async (req, res) => {
    try {
        const calificacion = new Calificacion(req.body);
        await calificacion.save();
        res.status(201).json(calificacion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getCalificaciones = async (req, res) => {
    try {
        const calificaciones = await Calificacion.find();
        res.json(calificaciones);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCalificacionById = async (req, res) => {
    try {
        const calificacion = await Calificacion.findById(req.params.id);
        if (!calificacion) {
            return res.status(404).json({ message: 'Calificacion not found' });
        }
        res.json(calificacion);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateCalificacion = async (req, res) => {
    try {
        const calificacion = await Calificacion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!calificacion) {
            return res.status(404).json({ message: 'Calificacion not found' });
        }
        res.json(calificacion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteCalificacion = async (req, res) => {
    try {
        const calificacion = await Calificacion.findByIdAndDelete(req.params.id);
        if (!calificacion) {
            return res.status(404).json({ message: 'Calificacion not found' });
        }
        res.json({ message: 'Calificacion deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createCalificacion,
    getCalificaciones,
    getCalificacionById,
    updateCalificacion,
    deleteCalificacion,
};
