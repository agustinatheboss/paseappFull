const express = require('express');
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/userController');
const router = express.Router();


router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:id', getUserById);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
