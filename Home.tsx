import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen: React.FC = ({ navigation }:any) => {  // Adicione "navigation" aqui
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<string[]>([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const savedEntries = await AsyncStorage.getItem('diaryEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  };

  const addEntry = async () => {
    if (entry.trim() === '') return;

    const newEntries = [...entries, entry];
    setEntries(newEntries);
    setEntry('');
    await AsyncStorage.setItem('diaryEntries', JSON.stringify(newEntries));
  };

  const deleteEntry = async (index: number) => {
    const newEntries = entries.filter((_, idx) => idx !== index);
    setEntries(newEntries);
    await AsyncStorage.setItem('diaryEntries', JSON.stringify(newEntries));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Meu Diário</Text>
      
      <TextInput
        value={entry}
        onChangeText={setEntry}
        placeholder="Escreva sua entrada..."
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      
      <Button title="Adicionar" onPress={addEntry} />
      <Button title="Ir para Adicionar Entrada" onPress={() => navigation.navigate('AddEntry')} />  {/* Navegação */}
      
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, borderBottomWidth: 1 }}>
            <Text>{item}</Text>
            <Button title="Excluir" onPress={() => deleteEntry(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
