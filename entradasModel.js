class Entrada {
    constructor(titulo, texto) {
      this.id = Date.now();
      this.titulo = titulo;
      this.texto = texto;
      this.data = new Date().toISOString();
    }
  }
  
  // Simula um "banco de dados em memória"
  const entradas = [];
  
  module.exports = {
    Entrada,
    entradas
  };
  