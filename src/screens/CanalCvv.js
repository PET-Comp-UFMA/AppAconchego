import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import Apoio from '../../assets/canaisdeapoio.svg'

export default function CanalCVV(){
    return(
        <SafeAreaView style={localStyles.container}>
            <Apoio />
            <Text style={GlobalStyles.titulo1}>Centro de Valorização da Vida(CVV)</Text>
            <Text style={localStyles.descricao}>O CVV — Centro de Valorização da Vida, fundado em São Paulo, em 1962, é uma associação civil sem fins lucrativos, filantrópica que presta serviço voluntário e gratuito de apoio emocional e prevenção do suicídio para todas as pessoas que querem e precisam conversar, sob total sigilo e anonimato. </Text>
            <Botao title='Acessar'/>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    },
    descricao:{
        color: GlobalColors.CorTextoForte,
        fontSize: 20,
        fontFamily: 'IBMPlexSans_Medium',
        justifyContent: 'center',
        textAlign: 'justify',
        padding: 16,
        maxWidth: 330
    }
}
)