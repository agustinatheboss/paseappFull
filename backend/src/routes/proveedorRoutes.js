const express = require('express');
const { createProveedor, getProveedores, getProveedorById, updateProveedor, deleteProveedor } = require('../controllers/proveedorController');
const router = express.Router();

router.post('/', createProveedor);
router.get('/', getProveedores);
router.get('/:id', getProveedorById);
router.put('/:id', updateProveedor);
router.delete('/:id', deleteProveedor);

module.exports = router;
