const TipoFrecuencia = require('../models/tipoFrecuenciaModel');

const createTipoFrecuencia = async (req, res) => {
    try {
        const tipoFrecuencia = new TipoFrecuencia(req.body);
        await tipoFrecuencia.save();
        res.status(201).json(tipoFrecuencia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getTipoFrecuencias = async (req, res) => {
    try {
        const tipoFrecuencias = await TipoFrecuencia.find();
        res.json(tipoFrecuencias);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTipoFrecuenciaById = async (req, res) => {
    try {
        const tipoFrecuencia = await TipoFrecuencia.findById(req.params.id);
        if (!tipoFrecuencia) {
            return res.status(404).json({ message: 'TipoFrecuencia not found' });
        }
        res.json(tipoFrecuencia);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateTipoFrecuencia = async (req, res) => {
    try {
        const tipoFrecuencia = await TipoFrecuencia.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!tipoFrecuencia) {
            return res.status(404).json({ message: 'TipoFrecuencia not found' });
        }
        res.json(tipoFrecuencia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteTipoFrecuencia = async (req, res) => {
    try {
        const tipoFrecuencia = await TipoFrecuencia.findByIdAndDelete(req.params.id);
        if (!tipoFrecuencia) {
            return res.status(404).json({ message: 'TipoFrecuencia not found' });
        }
        res.json({ message: 'TipoFrecuencia deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createTipoFrecuencia,
    getTipoFrecuencias,
    getTipoFrecuenciaById,
    updateTipoFrecuencia,
    deleteTipoFrecuencia,
};
