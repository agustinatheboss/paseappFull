const express = require('express');
const { createPedido, getPedidos, getPedidoById, updatePedido, deletePedido } = require('../controllers/pedidoController');
const router = express.Router();

router.post('/', createPedido);
router.get('/', getPedidos);
router.get('/:id', getPedidoById);
router.put('/:id', updatePedido);
router.delete('/:id', deletePedido);

module.exports = router;
