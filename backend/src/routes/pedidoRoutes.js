const express = require('express');
const { createPedido, getPedidos, getPedidoById, updatePedido, deletePedido,getPedidoByIdProveedor , getPedidoByIdUsuario } = require('../controllers/pedidoController');
const router = express.Router();

router.post('/', createPedido);
router.get('/', getPedidos);
router.get('/:id', getPedidoById);
router.put('/:id', updatePedido);
router.delete('/:id', deletePedido);
router.get('/proveedor/:id', getPedidoByIdProveedor); // 
router.get('/usuario/:id', getPedidoByIdUsuario); // Nueva


module.exports = router;
