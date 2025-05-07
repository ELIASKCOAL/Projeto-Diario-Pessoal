const express = require('express');
const router = express.Router();
const entradasController = require('../controllers/entradasController');

// Definindo as rotas e os respectivos handlers

// Rota para criar uma entrada (POST)
router.post('/', entradasController.criarEntrada);

// Rota para listar todas as entradas (GET)
router.get('/', entradasController.listarEntradas);

module.exports = router;
