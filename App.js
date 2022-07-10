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


import Aconchego from './src/screens/Aconchego';
import SaibaMais from './src/screens/saibaMais'
import GlobalStyles from './src/componentes/Global/GlobalStyles';
import GlobalColors from './src/componentes/Global/GlobalColors';
import CanalCvv from './src/screens/CanalCvv';
import CanalCaps from './src/screens/CanalCaps';
import CanalUnicef from './src/screens/CanalUnicef';
import CanalUbs from './src/screens/CanalUbs';
import Musicas from './src/screens/Apoio/musicas';
import Series from './src/screens/Apoio/series';
import Filmes from './src/screens/Apoio/filmes';
import Alimentacao from './src/screens/Apoio/alimentacao';
import CanaisApoio from './src/screens/Apoio/canaisApoio';
import Meditacao from './src/screens/Apoio/meditacao';
import MeditacaoGuiada from './src/screens/Apoio/meditaçãoGuiada';
import Autoquestionamento from './src/screens/Apoio/autoquestionamento';
import Mantras from './src/screens/Apoio/mantras';

import Avaliacao from './src/screens/avaliacao';
//Telas de teste 1
import Teste1Int from './src/screens/Teste1/Teste1Int'
import Teste1Int2 from './src/screens/Teste1/Teste1Int2'
import Teste1P1 from './src/screens/Teste1/Pergunta1-1'
import Teste1P2 from './src/screens/Teste1/Pergunta1-2'
import Teste1P3 from './src/screens/Teste1/Pergunta1-3'
import Teste1P4 from './src/screens/Teste1/Pergunta1-4'
import Teste1P5 from './src/screens/Teste1/Pergunta1-5'
import Teste1P6 from './src/screens/Teste1/Pergunta1-6'
import Teste1P7 from './src/screens/Teste1/Pergunta1-7'
import Teste1P8 from './src/screens/Teste1/Pergunta1-8'
import Teste1P9 from './src/screens/Teste1/Pergunta1-9'
import Teste1P10 from './src/screens/Teste1/Pergunta1-10'
import Teste1P11 from './src/screens/Teste1/Pergunta1-11'
import Teste1P12 from './src/screens/Teste1/Pergunta1-12'
import Teste1P13 from './src/screens/Teste1/Pergunta1-13'
import Teste1P14 from './src/screens/Teste1/Pergunta1-14'
import Teste1P15 from './src/screens/Teste1/Pergunta1-15'
import Teste1P16 from './src/screens/Teste1/Pergunta1-16'
import Teste1P17 from './src/screens/Teste1/Pergunta1-17'
import Teste1P18 from './src/screens/Teste1/Pergunta1-18'
import Teste1P19 from './src/screens/Teste1/Pergunta1-19'
import Teste1P20 from './src/screens/Teste1/Pergunta1-20'
import Teste1P21 from './src/screens/Teste1/Pergunta1-21'

//Telas teste 2
import Teste2Int from './src/screens/Teste2/Teste2Int'
import Teste2P1 from './src/screens/Teste2/Pergunta2-1'
import Teste2P2 from './src/screens/Teste2/Pergunta2-2'
import Teste2P3 from './src/screens/Teste2/Pergunta2-3'
import Teste2P4 from './src/screens/Teste2/Pergunta2-4'
import Teste2P5 from './src/screens/Teste2/Pergunta2-5'
import Teste2P6 from './src/screens/Teste2/Pergunta2-6'
import Teste2P7 from './src/screens/Teste2/Pergunta2-7'
import Teste2P8 from './src/screens/Teste2/Pergunta2-8'
import Teste2P9 from './src/screens/Teste2/Pergunta2-9'
import Teste2P10 from './src/screens/Teste2/Pergunta2-10'
import Teste2P11 from './src/screens/Teste2/Pergunta2-11'
import Teste2P12 from './src/screens/Teste2/Pergunta2-12'
import Teste2P13 from './src/screens/Teste2/Pergunta2-13'
import Teste2P14 from './src/screens/Teste2/Pergunta2-14'
import Teste2P15 from './src/screens/Teste2/Pergunta2-15'
import Teste2P16 from './src/screens/Teste2/Pergunta2-16'
import Teste2P17 from './src/screens/Teste2/Pergunta2-17'

//Telas teste 3

import Teste3Int from './src/screens/Teste3/Teste3Int'
import Teste3P1 from './src/screens/Teste3/Pergunta3-1'
import Teste3P2 from './src/screens/Teste3/Pergunta3-2'
import Teste3P3 from './src/screens/Teste3/Pergunta3-3'
import Teste3P4 from './src/screens/Teste3/Pergunta3-4'
import Teste3P5 from './src/screens/Teste3/Pergunta3-5'
import Teste3P6 from './src/screens/Teste3/Pergunta3-6'
import Teste3P7 from './src/screens/Teste3/Pergunta3-7'
import Teste3P8 from './src/screens/Teste3/Pergunta3-8'
import Teste3P9 from './src/screens/Teste3/Pergunta3-9'
import Teste3P10 from './src/screens/Teste3/Pergunta3-10'
import Teste3R1 from './src/screens/Teste3/Resultado3-1'
import Teste3R2 from './src/screens/Teste3/Resultado3-2'
import Teste3R3 from './src/screens/Teste3/Resultado3-3'
import Teste3R4 from './src/screens/Teste3/Resultado3-4'
import Teste3R5 from './src/screens/Teste3/Resultado3-5'
import Teste3R6 from './src/screens/Teste3/Resultado3-6'
import Teste3R7 from './src/screens/Teste3/Resultado3-7'
import Teste3R8 from './src/screens/Teste3/Resultado3-8'
import Teste3R9 from './src/screens/Teste3/Resultado3-9'
import Teste3R10 from './src/screens/Teste3/Resultado3-10'




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
                
          <Stack.Screen name='Aconchego' component={Aconchego} options={{headerShown: false}} />

          <Stack.Screen name='sobre o aconchego' component={SaibaMais} />

          <Stack.Screen name='músicas' component={Musicas} />

          <Stack.Screen name='séries' component={Series} />

          <Stack.Screen name='filmes' component={Filmes} />

          <Stack.Screen name='alimentação' component={Alimentacao} />

          <Stack.Screen name='canais de apoio' component={CanaisApoio} />

          <Stack.Screen name='CVV' component={CanalCvv} />

          <Stack.Screen name='UNICEF' component={CanalUnicef} />

          <Stack.Screen name='CAPS' component={CanalCaps} />

          <Stack.Screen name='UBS' component={CanalUbs} />
          
          <Stack.Screen name='meditação' component={Meditacao} />
          
          <Stack.Screen name='meditação guiada' component={MeditacaoGuiada} />
          
          <Stack.Screen name='autoquestionamento' component={Autoquestionamento} />
          
          <Stack.Screen name='mantras' component={Mantras} />

          <Stack.Screen name='Avaliaçaõ' component={Avaliacao} />

          <Stack.Screen name='Teste1Int' component={Teste1Int} />

          <Stack.Screen name='Teste1Int2' component={Teste1Int2} />
          
          <Stack.Screen name='Teste1P1' component={Teste1P1} />
          
          <Stack.Screen name='Teste1P2' component={Teste1P2} />

          <Stack.Screen name='Teste1P3' component={Teste1P3} />

          <Stack.Screen name='Teste1P4' component={Teste1P4} />

          <Stack.Screen name='Teste1P5' component={Teste1P5} />

          <Stack.Screen name='Teste1P6' component={Teste1P6} />

          <Stack.Screen name='Teste1P7' component={Teste1P7} />

          <Stack.Screen name='Teste1P8' component={Teste1P8} />

          <Stack.Screen name='Teste1P9' component={Teste1P9} />

          <Stack.Screen name='Teste1P10' component={Teste1P10} />

          <Stack.Screen name='Teste1P11' component={Teste1P11} />
          
          <Stack.Screen name='Teste1P12' component={Teste1P12} />

          <Stack.Screen name='Teste1P13' component={Teste1P13} />

          <Stack.Screen name='Teste1P14' component={Teste1P14} />

          <Stack.Screen name='Teste1P15' component={Teste1P15} />

          <Stack.Screen name='Teste1P16' component={Teste1P16} />

          <Stack.Screen name='Teste1P17' component={Teste1P17} />

          <Stack.Screen name='Teste1P18' component={Teste1P18} />

          <Stack.Screen name='Teste1P19' component={Teste1P19} />

          <Stack.Screen name='Teste1P20' component={Teste1P20} />

          <Stack.Screen name='Teste1P21' component={Teste1P21} />

          <Stack.Screen name='Teste2Int' component={Teste2Int} />

          <Stack.Screen name='Teste2P1' component={Teste2P1} />

          <Stack.Screen name='Teste2P2' component={Teste2P2} />

          <Stack.Screen name='Teste2P3' component={Teste2P3} />

          <Stack.Screen name='Teste2P4' component={Teste2P4} />
          
          <Stack.Screen name='Teste2P5' component={Teste2P5} />

          <Stack.Screen name='Teste2P6' component={Teste2P6} />

          <Stack.Screen name='Teste2P7' component={Teste2P7} />

          <Stack.Screen name='Teste2P8' component={Teste2P8} />

          <Stack.Screen name='Teste2P9' component={Teste2P9} />

          <Stack.Screen name='Teste2P10' component={Teste2P10} />

          <Stack.Screen name='Teste2P11' component={Teste2P11} />

          <Stack.Screen name='Teste2P12' component={Teste2P12} />

          <Stack.Screen name='Teste2P13' component={Teste2P13} />

          <Stack.Screen name='Teste2P14' component={Teste2P14} />

          <Stack.Screen name='Teste2P15' component={Teste2P15} />

          <Stack.Screen name='Teste2P16' component={Teste2P16} />

          <Stack.Screen name='Teste2P17' component={Teste2P17} />

          <Stack.Screen name='Teste3Int' component={Teste3Int} />

          <Stack.Screen name='Teste3P1' component={Teste3P1} />

          <Stack.Screen name='Teste3P2' component={Teste3P2} />

          <Stack.Screen name='Teste3P3' component={Teste3P3} />

          <Stack.Screen name='Teste3P4' component={Teste3P4} />

          <Stack.Screen name='Teste3P5' component={Teste3P5} />

          <Stack.Screen name='Teste3P6' component={Teste3P6} />

          <Stack.Screen name='Teste3P7' component={Teste3P7} />

          <Stack.Screen name='Teste3P8' component={Teste3P8} />

          <Stack.Screen name='Teste3P9' component={Teste3P9} />

          <Stack.Screen name='Teste3P10' component={Teste3P10} />

          <Stack.Screen name='Teste3R1' component={Teste3R1} />

          <Stack.Screen name='Teste3R2' component={Teste3R2} />

          <Stack.Screen name='Teste3R3' component={Teste3R3} />

          <Stack.Screen name='Teste3R4' component={Teste3R4} />

          <Stack.Screen name='Teste3R5' component={Teste3R5} />

          <Stack.Screen name='Teste3R6' component={Teste3R6} />

          <Stack.Screen name='Teste3R7' component={Teste3R7} />

          <Stack.Screen name='Teste3R8' component={Teste3R8} />

          <Stack.Screen name='Teste3R9' component={Teste3R9} />

          <Stack.Screen name='Teste3R10' component={Teste3R10} />

        </Stack.Navigator>

      </View>
    </NavigationContainer>
)}