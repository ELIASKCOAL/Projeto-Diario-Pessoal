// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const entradasRoutes = require('./routes/entradasRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Usando as rotas de entradas
app.use('/entradas', entradasRoutes);

// Rota de teste para verificar se a API está funcionando
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Rota simples de mensagem de boas-vindas
app.get('/mensagem', (req, res) => {
  res.json({ mensagem: 'Olá do servidor!' });
});

// Rota principal
app.get('/', (req, res) => {
  res.send('API do Diário funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
