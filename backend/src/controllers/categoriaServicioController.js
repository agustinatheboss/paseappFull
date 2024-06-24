const CategoriaServicio = require('../models/categoriaServicioModel');

const createCategoriaServicio = async (req, res) => {
    try {
        const categoriaServicio = new CategoriaServicio(req.body);
        await categoriaServicio.save();
        res.status(201).json(categoriaServicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getCategoriaServicios = async (req, res) => {
    try {
        const categoriaServicios = await CategoriaServicio.find();
        res.json(categoriaServicios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCategoriaServicioById = async (req, res) => {
    try {
        const categoriaServicio = await CategoriaServicio.findById(req.params.id);
        if (!categoriaServicio) {
            return res.status(404).json({ message: 'CategoriaServicio not found' });
        }
        res.json(categoriaServicio);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateCategoriaServicio = async (req, res) => {
    try {
        const categoriaServicio = await CategoriaServicio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!categoriaServicio) {
            return res.status(404).json({ message: 'CategoriaServicio not found' });
        }
        res.json(categoriaServicio);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteCategoriaServicio = async (req, res) => {
    try {
        const categoriaServicio = await CategoriaServicio.findByIdAndDelete(req.params.id);
        if (!categoriaServicio) {
            return res.status(404).json({ message: 'CategoriaServicio not found' });
        }
        res.json({ message: 'CategoriaServicio deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createCategoriaServicio,
    getCategoriaServicios,
    getCategoriaServicioById,
    updateCategoriaServicio,
    deleteCategoriaServicio,
};
