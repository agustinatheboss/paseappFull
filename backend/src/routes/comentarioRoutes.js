const express = require('express');
const { createComentario, getComentarios, getComentarioById, updateComentario, deleteComentario } = require('../controllers/comentarioController');
const router = express.Router();

router.post('/', createComentario);
router.get('/', getComentarios);
router.get('/:id', getComentarioById);
router.put('/:id', updateComentario);
router.delete('/:id', deleteComentario);

module.exports = router;
