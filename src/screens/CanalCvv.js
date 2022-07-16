import React from 'react'
import { Text, StyleSheet, SafeAreaView, Image, Linking } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'

export default function CanalCVV(){
    return(
        <SafeAreaView style={localStyles.container}>
        <Image source={require('../../assets/apoio.png')} />
            <Text style={GlobalStyles.titulo1}>Centro de Valorização da Vida(CVV)</Text>
            <Text style={[GlobalStyles.descricao, {marginTop: 15, marginBottom: 40}]}>O CVV — Centro de Valorização da Vida, fundado em São Paulo, em 1962, é uma associação civil sem fins lucrativos, filantrópica que presta serviço voluntário e gratuito de apoio emocional e prevenção do suicídio para todas as pessoas que querem e precisam conversar, sob total sigilo e anonimato. </Text>
            <Botao title='Acessar' onPress={() => {Linking.openURL('https://www.cvv.org.br/')}}/>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    }
}
)