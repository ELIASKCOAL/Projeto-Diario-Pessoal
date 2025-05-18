import React, { useState } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const AddEntryScreen: React.FC = () => {
  const [newEntry, setNewEntry] = useState('');
  const [entries, setEntries] = useState<string[]>([]);
  const router = useRouter();

  const addNewEntry = async () => {
    if (newEntry.trim().length === 0) {
      console.log('Botão pressionado');
      console.log('Valor do input:', newEntry);
      if (Platform.OS === 'web') {
        window.alert('A entrada não pode estar vazia.');
      } else {
        Alert.alert('Erro', 'A entrada não pode estar vazia.');
      }
      return;
    }

    try {
      const savedEntries = await AsyncStorage.getItem('diaryEntries');
      const entries = savedEntries ? JSON.parse(savedEntries) || [] : [];

      entries.push(newEntry);
      await AsyncStorage.setItem('diaryEntries', JSON.stringify(entries));
      if (Platform.OS === 'web') {
        window.alert('Entrada adicionada com sucesso!');
      } else {
        Alert.alert('Sucesso', 'Entrada adicionada com sucesso!');
      }
      setNewEntry('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a entrada.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={newEntry}
        onChangeText={setNewEntry}
        placeholder="Escreva sua nova entrada..."
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Adicionar Entrada" onPress={addNewEntry}  />
      <Button title="Voltar" onPress={() => router.back()} color="#888" />

      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderBottomWidth: 1 }}>
            <Text>{item}</Text>
          </View>
        )}
      />

    </View>
  );
};

export default AddEntryScreen;