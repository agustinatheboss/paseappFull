const express = require('express');
const { createCategoriaServicio, getCategoriaServicios, getCategoriaServicioById, updateCategoriaServicio, deleteCategoriaServicio } = require('../controllers/categoriaServicioController');
const router = express.Router();


router.post('/', createCategoriaServicio);
router.get('/', getCategoriaServicios);
router.get('/:id', getCategoriaServicioById);
router.put('/:id', updateCategoriaServicio);
router.delete('/:id', deleteCategoriaServicio);



module.exports = router;
