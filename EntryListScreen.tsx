import React,{useState} from 'react';
import{View,TextInput,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const handleSave = async () =>{
    try{
        await AsyncStorage.setItem('diaryEntry',entry);
        console.log("Entrada salva:",entry);
    }catch(error){
        console.error("Erro ao salvar a entrada:"error)
    }
};
const EntryListScreen: React.FC = () => {
const[entry,setEntry] = useState("");

const handleSave = () =>{
    console.log("Entrada salva",entry);
};

return(
    style={style.input}
    placeholder='Escreva sua entrada aqui...'
    value={entry}
    onChangeText={setEntry}
    multiline/>

);
};

export default EntryListScreen



