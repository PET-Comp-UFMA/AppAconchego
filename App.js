import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  IBMPlexSans_600SemiBold as IBMPlexSans_Bold,
  IBMPlexSans_400Regular as IBMPlexSans_Regular,
  IBMPlexSans_500Medium as IBMPlexSans_Medium
} from '@expo-google-fonts/ibm-plex-sans'

import Teste from './src/screens/teste';

const Stack = createStackNavigator();

export default function App() {

  let[fontsLoaded] = useFonts({ IBMPlexSans_Bold, IBMPlexSans_Regular, IBMPlexSans_Medium });
  if(!fontsLoaded) { return <AppLoading /> };

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator>
          <Stack.Screen
            name='teste'
            component={Teste}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}