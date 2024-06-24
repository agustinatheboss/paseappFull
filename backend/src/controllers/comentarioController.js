const Comentario = require('../models/comentarioModel');

const createComentario = async (req, res) => {
    try {
        const comentario = new Comentario(req.body);
        await comentario.save();
        res.status(201).json(comentario);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.find();
        res.json(comentarios);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getComentarioById = async (req, res) => {
    try {
        const comentario = await Comentario.findById(req.params.id);
        if (!comentario) {
            return res.status(404).json({ message: 'Comentario not found' });
        }
        res.json(comentario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateComentario = async (req, res) => {
    try {
        const comentario = await Comentario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!comentario) {
            return res.status(404).json({ message: 'Comentario not found' });
        }
        res.json(comentario);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteComentario = async (req, res) => {
    try {
        const comentario = await Comentario.findByIdAndDelete(req.params.id);
        if (!comentario) {
            return res.status(404).json({ message: 'Comentario not found' });
        }
        res.json({ message: 'Comentario deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createComentario,
    getComentarios,
    getComentarioById,
    updateComentario,
    deleteComentario,
};
