const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

// Rota POST para login
router.post('/', AuthController.login);

module.exports = router;