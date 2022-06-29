import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import Apoio from '../../assets/canaisdeapoio.svg'

export default function CanalUnicef(){
    return(
        <SafeAreaView style={localStyles.container}>
            <Apoio />
            <Text style={GlobalStyles.titulo1}>Pode Falar(UNICEF)</Text>
            <Text style={localStyles.descricao}>Pode Falar é um canal de ajuda em saúde mental para você que tem de 13 a 24 anos desenvolvido pela Unicef em parceria com outros projetos, a exemplo do CVV. Através do site é possível consultar o cronograma de atendimento e agendar sua consulta on-line.</Text>
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