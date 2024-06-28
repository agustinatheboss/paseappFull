const express = require('express');
const router = express.Router();
const { initializeAll } = require('../controllers/initializeController');

router.post('/initialize', initializeAll);

module.exports = router;
