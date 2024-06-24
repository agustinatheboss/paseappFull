const Mascota = require('../models/mascotaModel');

const createMascota = async (req, res) => {
    try {
        const mascota = new Mascota(req.body);
        await mascota.save();
        res.status(201).json(mascota);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find();
        res.json(mascotas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMascotaById = async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.id);
        if (!mascota) {
            return res.status(404).json({ message: 'Mascota not found' });
        }
        res.json(mascota);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!mascota) {
            return res.status(404).json({ message: 'Mascota not found' });
        }
        res.json(mascota);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteMascota = async (req, res) => {
    try {
        const mascota = await Mascota.findByIdAndDelete(req.params.id);
        if (!mascota) {
            return res.status(404).json({ message: 'Mascota not found' });
        }
        res.json({ message: 'Mascota deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createMascota,
    getMascotas,
    getMascotaById,
    updateMascota,
    deleteMascota,
};
