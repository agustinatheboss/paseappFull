const express = require('express');
const { createServicio, 
    getServicios, 
    getServicioById,
    getServicioByIdProveedor, 
    updateServicio, 
    deleteServicio } = require('../controllers/servicioController');
const router = express.Router();

router.post('/', createServicio);
router.get('/', getServicios);
router.get('/:id', getServicioById);
router.get('/proveedor/:id', getServicioByIdProveedor);

//router.delete('/:id', deleteServicio);

module.exports = router;
