/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Home, Quiz, Result, Settings, SpashScreen
} from './src/screens/index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/features/Store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SpashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="QuizSetting" component={Settings} options={{ headerShown: false }} />
          <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer >
  )
}

export default App

