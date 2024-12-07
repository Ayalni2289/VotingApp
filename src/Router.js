import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Questions", headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: "Detail", headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: "Login", headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: "Profile", headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
