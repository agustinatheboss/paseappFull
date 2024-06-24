const TipoMascota = require('../models/tipoMascotaModel');

const createTipoMascota = async (req, res) => {
    try {
        const tipoMascota = new TipoMascota(req.body);
        await tipoMascota.save();
        res.status(201).json(tipoMascota);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getTipoMascotas = async (req, res) => {
    try {
        const tipoMascotas = await TipoMascota.find();
        res.json(tipoMascotas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTipoMascotaById = async (req, res) => {
    try {
        const tipoMascota = await TipoMascota.findById(req.params.id);
        if (!tipoMascota) {
            return res.status(404).json({ message: 'TipoMascota not found' });
        }
        res.json(tipoMascota);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateTipoMascota = async (req, res) => {
    try {
        const tipoMascota = await TipoMascota.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!tipoMascota) {
            return res.status(404).json({ message: 'TipoMascota not found' });
        }
        res.json(tipoMascota);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteTipoMascota = async (req, res) => {
    try {
        const tipoMascota = await TipoMascota.findByIdAndDelete(req.params.id);
        if (!tipoMascota) {
            return res.status(404).json({ message: 'TipoMascota not found' });
        }
        res.json({ message: 'TipoMascota deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createTipoMascota,
    getTipoMascotas,
    getTipoMascotaById,
    updateTipoMascota,
    deleteTipoMascota,
};
