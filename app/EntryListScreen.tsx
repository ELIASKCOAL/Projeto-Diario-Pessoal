import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EntryListScreen: React.FC = () => {
    const [entry, setEntry] = useState("");

    const handleSave = async () => {
        try {
            await AsyncStorage.setItem('diaryEntry', entry);
            console.log("Entrada salva:", entry);
        } catch (error) {
            console.error("Erro ao salvar a entrada:", error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Escreva sua entrada aqui...'
                value={entry}
                onChangeText={setEntry}
                multiline
            />
            <Button title="Salvar" onPress={handleSave} />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        minHeight: 100,
        textAlignVertical: 'top'
    }
});

export default EntryListScreen;
