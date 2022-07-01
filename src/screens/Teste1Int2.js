import React from 'react'
import { Image, SafeAreaView, Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import GlobalColors from '../componentes/Global/GlobalColors'
import BotaoPeqProx from '../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../componentes/Botoes/BotaoPequenoVoltar'


export default function Teste1Int2(){
    return(
        <SafeAreaView style={localStyles.container}>
            <Image source={require('../../assets/vector.png')} style={localStyles.Imagem}/>
            <Text style={GlobalStyles.titulo1}>Instruções</Text>
                    <View style={localStyles.paragrafo}>
                    <Text style={GlobalStyles.descricao}>Por favor, leia cuidadosamente cada uma das afirmações e assinale o número apropriado 0, 1, 2 ou 3.</Text>
                    </View>
                    <View style={localStyles.paragrafo}>
                    <Text style={GlobalStyles.descricao}>A pontuação indicará o quanto ela se aplicou a você durante a última semana, conforme as indicações. </Text>
                    </View>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar'/>
                    <BotaoPeqProx title='Próximo'/>
                </View>
                <Image source={require('../../assets/figavaliacao.png')}/>
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
        backgroundColor: GlobalColors.CorFundo,
        },
    Imagem: {
        tintColor: '#0066FF',
        height: 80,
        width: 72
    },
    paragrafo: {
        paddingBottom: 15
    }
    }
)