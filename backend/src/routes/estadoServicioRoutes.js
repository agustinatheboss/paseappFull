const express = require('express');
const { createEstadoServicio, getEstadoServicios, getEstadoServicioById, updateEstadoServicio, deleteEstadoServicio } = require('../controllers/estadoServicioController');
const router = express.Router();

router.post('/', createEstadoServicio);
router.get('/', getEstadoServicios);
router.get('/:id', getEstadoServicioById);
router.put('/:id', updateEstadoServicio);
router.delete('/:id', deleteEstadoServicio);

module.exports = router;