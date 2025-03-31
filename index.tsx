import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/screens/HomeScreen';
import AddEntryScreen from '@/screens/AddEntryScreen';


const Stack = createStackNavigator();

function Home() {
  return (
  
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
   
  );
}


export default HomeScreen;

