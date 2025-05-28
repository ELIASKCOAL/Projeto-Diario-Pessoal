import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { fetchData } from '../.expo/api/apiService';

const Index = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Diário</Text>
     

      <Link href="/tabs/HomeScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver entradas</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/tabs/AddEntryScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar nova entrada</Text>
         
        </TouchableOpacity>
      </Link>
    <Link href="/register" asChild>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Criar conta</Text>
  </TouchableOpacity>
</Link>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1E90FF', // azul parecido com botão padrão
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Index;
