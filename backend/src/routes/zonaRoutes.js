const express = require('express');
const { createZona, getZonas, getZonaById, updateZona, deleteZona,initializeZonas } = require('../controllers/zonaController');
const router = express.Router();

router.post('/', createZona);
router.get('/', getZonas);
router.get('/:id', getZonaById);
router.put('/:id', updateZona);
router.delete('/:id', deleteZona);
router.post('/initialize', initializeZonas); // Ruta especial para inicializar datos


module.exports = router;

