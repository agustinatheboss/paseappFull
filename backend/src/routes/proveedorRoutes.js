const express = require('express');
const { createProveedor, getProveedores, getProveedorById, updateProveedor, deleteProveedor, loginProveedor } = require('../controllers/proveedorController');
const router = express.Router();

router.post('/login', loginProveedor);
router.post('/', createProveedor);
router.get('/', getProveedores);
router.get('/:id', getProveedorById);
router.put('/:id', updateProveedor);
router.delete('/:id', deleteProveedor);

module.exports = router;
