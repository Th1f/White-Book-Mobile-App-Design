import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, Button } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/home';
import Login from './screens/login';
import Friends from './screens/friends';
import Messages from './screens/messages';
import { NavigationContainer} from '@react-navigation/native' 

const Stack = createNativeStackNavigator();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 300 },
    },
    close: {
      animation: 'timing',
      config: { duration: 300 },
    },
  },
  headerTitleInterpolator: ({ current }) => {
    return {
      style: {
        opacity: current.progress,
      },
    };
  },
  cardStyleInterpolator: ({ current }) => {
    return {
      cardStyle: {
        opacity: current.progress,
      },
    };
  },
};

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator transitionConfig ={() => MyTransition} screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Friends' component={Friends} options={{animation:'none',}} />
        <Stack.Screen name='Messages' component={Messages} options={{animation:'none',}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


