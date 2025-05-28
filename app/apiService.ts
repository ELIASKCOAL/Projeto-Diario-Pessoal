import axios from 'axios';

// Substitua com o endereço da sua API
const API_URL = 'http://192.168.1.1';  // Troque o IP pela sua rede local

// Função para buscar dados da API
export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Resposta da API:', response.data);  // Log para verificar a resposta
    return response.data;  // Retorna os dados recebidos da API
  } catch (error) {
    console.error('Erro ao acessar a API:', error);  // Se der erro, exibe no console
  }
};
