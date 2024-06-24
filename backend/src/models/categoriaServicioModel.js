const mongoose = require('mongoose');

const categoriaServicioSchema = new mongoose.Schema({
    nombreCategoria: {
        type: String,
        required: true
    }
});

const CategoriaServicio = mongoose.model('CategoriaServicio', categoriaServicioSchema);

module.exports = CategoriaServicio;
