const { Entrada, entradas } = require('../models/entradasModel');

// Função para criar uma nova entrada
exports.criarEntrada = (req, res) => {
  const { titulo, texto } = req.body;
  const novaEntrada = new Entrada(titulo, texto);
  entradas.push(novaEntrada);
  res.status(201).json(novaEntrada);
};

// Função para listar todas as entradas
exports.listarEntradas = (req, res) => {
  res.json(entradas);
};
