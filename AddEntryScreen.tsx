import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'AddEntry'>;
};

const AddEntryScreen: React.FC<Props> = ({ navigation }) => {
  const [newEntry, setNewEntry] = useState('');
  const [entries, setEntries] = useState<string[]>([]);

  useEffect(() => {
    loadEntries();
  }, []);

  const addNewEntry = async () => {
    if (newEntry.trim().length === 0) {
      console.log('Botão pressionado');
      console.log('Valor do input:', newEntry);
      Alert.alert('Erro', 'A entrada não pode estar vazia.');
      return;
    }

    try {
      const savedEntries = await AsyncStorage.getItem('diaryEntries');
      const entries = savedEntries ? JSON.parse(savedEntries) || [] : [];

      entries.push(newEntry);
      await AsyncStorage.setItem('diaryEntries', JSON.stringify(entries));


    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a entrada.');
    }
  };

  const loadEntries = async () => {
    const savedEntries = await AsyncStorage.getItem('diaryEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
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
