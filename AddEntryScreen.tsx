import React,{useState} from 'react';
import{View,TextInput,Button,StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        padding:20,
    },
    input:{
        height:200,
        boderColor:'gray',
        borderWidth:1,
        marginBottom:10,
        padding:10,
    }
});
export default EntryListScreen

