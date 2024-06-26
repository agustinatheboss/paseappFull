const express = require('express');
const router = express.Router();
const initializeController = require('../controllers/initializationController');

// Asegúrate de que initializeController.initializeAll esté definido y sea una función
if (typeof initializeController.initializeAll !== 'function') {
    throw new Error('initializeController.initializeAll debe ser una función');
}

router.post('/initialize', initializeController.initializeAll);

module.exports = router;
/*
const express = require('express');
const { initializeData } = require('../controllers/initializeController');
const router = express.Router();

router.post('/initialize', initializeData);

module.exports = router;
*/