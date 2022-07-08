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

import { Entypo } from '@expo/vector-icons'

//import Teste1 from './src/screens/teste1';
//import Teste2 from './src/screens/teste2';
//import Teste3 from './src/screens/teste3';
import Teste4 from './src/screens/teste4';
import Teste2 from './src/screens/teste2'
import Teste1 from './src/screens/Teste1Int2'
import SaibaMais from './src/screens/saibaMais'
import GlobalStyles from './src/componentes/Global/GlobalStyles';
import GlobalColors from './src/componentes/Global/GlobalColors';
import CanalCvv from './src/screens/CanalCvv';
import CanalCaps from './src/screens/CanalCaps';
import CanalUnicef from './src/screens/CanalUnicef';
import CanalUbs from './src/screens/CanalUbs';
import TelaAvaliacao from './src/screens/avaliacao'
import Home from './src/screens/Apoio/TelaApoio'
//import TelaApoio from './src/screens/TelaApoio'
//import Teste1Int from './src/screens/Teste1Int';
import Musicas from './src/screens/Apoio/musicas';
import Series from './src/screens/Apoio/series';
import Filmes from './src/screens/Apoio/filmes';

const Stack = createStackNavigator();

export default function App() {

  let[fontsLoaded] = useFonts({ IBMPlexSans_Bold, IBMPlexSans_Regular, IBMPlexSans_Medium });
  if(!fontsLoaded) { return <AppLoading /> };

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={
            {
              headerTitleAlign:'center',
              headerTitleStyle: GlobalStyles.header,
              headerStyle: GlobalStyles.headerStyle,
              headerBackTitleVisible: false,
              headerBackImage: () => <Entypo name='chevron-left' size={40} color={GlobalColors.CorTextoForte} style={{marginRight: -15}} />}}>
                
          <Stack.Screen name='teste4' component={Teste4} options={{headerShown: false}} />

          <Stack.Screen name='sobre o aconchego' component={SaibaMais} />

          <Stack.Screen name='músicas' component={Musicas} />

          <Stack.Screen name='séries' component={Series} />

          <Stack.Screen name='filmes' component={Filmes} />
        </Stack.Navigator>

      </View>
    </NavigationContainer>
  );
}