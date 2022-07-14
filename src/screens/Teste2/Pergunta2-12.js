import React from 'react'
import { SafeAreaView, Image, Text, StyleSheet, View, Dimensions, ScrollView  } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'

export default function Pergunta212(){

    const navigation = useNavigation();
    
    return(
        <SafeAreaView style={localStyles.container}>
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={localStyles.container2}>
                <Text style={GlobalStyles.titulo1}>12. É incapaz de desempenhar um papel útil em sua vida?</Text>
            </View>
            <Image source={require('../../../assets/relax.png')} style={localStyles.Imagem2}/>
            <View style={localStyles.container2}>
                <BotaoEscolhaTeste
                    number = {0}
                    title = 'Sim'
                />
                <BotaoEscolhaTeste
                    number = {1}
                    title = 'Não'
                />
            </View>
            </ScrollView>
            <View style={GlobalStyles.botoesTeste}>
                <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste2P11')} />
                <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste2P13')} />
            </View>
        </SafeAreaView>
    )
}
const localStyles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo
        },
        container2:{
            paddingTop: 40,
            paddingBottom: 20, 
            alignItems: 'center'
        },
    Imagem2: {
        width: 280,
        height: 200
    }
    }
)