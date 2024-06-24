const express = require('express');
const { createServicio, getServicios, getServicioById, updateServicio, deleteServicio } = require('../controllers/servicioController');
const router = express.Router();

router.post('/', createServicio);
router.get('/', getServicios);
router.get('/:id', getServicioById);
router.put('/:id', updateServicio);
router.delete('/:id', deleteServicio);

module.exports = router;
