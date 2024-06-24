const express = require('express');
const { createCalificacion, getCalificaciones, getCalificacionById, updateCalificacion, deleteCalificacion } = require('../controllers/calificacionController');
const router = express.Router();

router.post('/', createCalificacion);
router.get('/', getCalificaciones);
router.get('/:id', getCalificacionById);
router.put('/:id', updateCalificacion);
router.delete('/:id', deleteCalificacion);

module.exports = router;

