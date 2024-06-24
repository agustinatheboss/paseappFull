const Zona = require('../models/zonaModel');

const createZona = async (req, res) => {
    try {
        const zona = new Zona(req.body);
        await zona.save();
        res.status(201).json(zona);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getZonas = async (req, res) => {
    try {
        const zonas = await Zona.find();
        res.json(zonas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getZonaById = async (req, res) => {
    try {
        const zona = await Zona.findById(req.params.id);
        if (!zona) {
            return res.status(404).json({ message: 'Zona not found' });
        }
        res.json(zona);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateZona = async (req, res) => {
    try {
        const zona = await Zona.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!zona) {
            return res.status(404).json({ message: 'Zona not found' });
        }
        res.json(zona);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteZona = async (req, res) => {
    try {
        const zona = await Zona.findByIdAndDelete(req.params.id);
        if (!zona) {
            return res.status(404).json({ message: 'Zona not found' });
        }
        res.json({ message: 'Zona deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const initializeZonas = async (req, res) => {
    try {
        await Zona.create({nombreZona: "CABA"});
        await Zona.create({nombreZona: "Zona Oeste"});
        res.status(201).json({ message: "Zonas inicializadas" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    createZona,
    getZonas,
    getZonaById,
    updateZona,
    deleteZona,
    initializeZonas
};
