import React from 'react'
import { Image, SafeAreaView, Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'

export default function Teste1Int(){
    return(
        <SafeAreaView style={localStyles.container}>
            <Image source={require('../../../assets/vector.png')} style={localStyles.Imagem}/>
            <Text style={GlobalStyles.titulo1}>Avaliando Ansiedade, Depressão e Estresse</Text>
            <Text style={GlobalStyles.descricao}>É um instrumento de autorelato com 21 questões, onde são avaliados os sinais e ansiedade, depressão e estresse. Ao final é apresentado um resultado baseado na classificação das 03 dimensões para Normal, Leve, Moderada, Severa e Extremamente Severa.</Text>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar'/>
                    <BotaoPeqProx title='Próximo'/>
                </View>
                <Image source={require('../../../assets/figavaliacao.png')}/>
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
    }    
    }
)