const express = require('express');
const { createEstadoPedido, getEstadoPedidos, getEstadoPedidoById, updateEstadoPedido, deleteEstadoPedido } = require('../controllers/estadoPedidoController');
const router = express.Router();

router.post('/', createEstadoPedido);
router.get('/', getEstadoPedidos);
router.get('/:id', getEstadoPedidoById);
router.put('/:id', updateEstadoPedido);
router.delete('/:id', deleteEstadoPedido);

module.exports = router;
