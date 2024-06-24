const express = require('express');
const { createMascota, getMascotas, getMascotaById, updateMascota, deleteMascota } = require('../controllers/mascotaController');
const router = express.Router();

router.post('/', createMascota);
router.get('/', getMascotas);
router.get('/:id', getMascotaById);
router.put('/:id', updateMascota);
router.delete('/:id', deleteMascota);

module.exports = router;
