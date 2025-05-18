import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';  // Para navegação entre telas
import { fetchData } from './apiService';  // Importando a função de apiService

const Index = () => {
  useEffect(() => {
    // Chama a API quando o componente for montado
    fetchData();
  }, []);  // [] significa que será executado apenas uma vez após o carregamento do componente

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Bem-vindo ao Diário</Text>

      <Link href="/HomeScreen" asChild>
        <Button title="Ver entradas" />
      </Link>

      <Link href="/AddEntryScreen" asChild>
        <Button title="Adicionar nova entrada" />
      </Link>
    </View>
  );
};

export default Index;
