import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const AddEntryScreen = () => {
  const [entry, setEntry] = useState("");

  const handleSave = () => {
    if (!entry.trim()) {
      Alert.alert("Erro", "O campo não pode estar vazio!");
      return;
    }
    // Aqui você pode adicionar lógica para salvar os dados, como uma API ou Context
    Alert.alert("Sucesso", `Entrada adicionada: ${entry}`);
    setEntry(""); // Limpa o campo após salvar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Nova Entrada</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={entry}
        onChangeText={setEntry}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AddEntryScreen;

