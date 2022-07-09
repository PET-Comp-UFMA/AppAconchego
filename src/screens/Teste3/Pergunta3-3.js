import React from 'react'
import { SafeAreaView, Image, Text, StyleSheet, View, Dimensions  } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'

export default function Pergunta33(){
    return(
        <SafeAreaView style={localStyles.container}>
            <View>
                <Text style={GlobalStyles.titulo1}>Em relação aos hábitos alimentares, você consome apenas o que apetece, come carboidratos, frituras e açúcares, pois comer é um prazer sem regras?</Text>
            </View>
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
            <View style={GlobalStyles.botoesTeste}>
                <BotaoPeqVol title='Voltar'/>
                <BotaoPeqProx title='Próximo'/>
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
        backgroundColor: GlobalColors.CorFundo,
        paddingTop: 40
        },
    container2:{
        paddingTop: 50,
        paddingBottom: 50
    }
    }
)