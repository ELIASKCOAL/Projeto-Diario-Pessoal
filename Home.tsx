import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen: React.FC = ({ navigation }) => {
    return (
      
            <Text>Bem-vindo ao Diário Pessoal Daily Life!</Text>
            <Button 
                title="Adicionar Entrada" 
                onPress={() => navigation.navigate("Entry")} 
            />
     
    );
};

export default HomeScreen;