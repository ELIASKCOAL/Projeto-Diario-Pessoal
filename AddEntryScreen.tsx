import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddEntryScreen: React.FC = ({ navigation }: any) => {  // Adicione "navigation" aqui
  const [newEntry, setNewEntry] = useState('');

  const addNewEntry = async () => {
    if (newEntry.trim() === '') return;

    const savedEntries = await AsyncStorage.getItem('diaryEntries');
    const entries = savedEntries ? JSON.parse(savedEntries) : [];
    entries.push(newEntry);

    await AsyncStorage.setItem('diaryEntries', JSON.stringify(entries));
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={newEntry}
        onChangeText={setNewEntry}
        placeholder="Escreva sua nova entrada..."
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Adicionar Entrada" onPress={addNewEntry} />
    </View>
  );
};

export default AddEntryScreen;
