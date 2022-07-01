import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import Apoio from '../../assets/apoio.svg'

export default function CanalUbs(){
    return(
        <ScrollView>
        <SafeAreaView style={localStyles.container}>
            <Apoio />
            <Text style={GlobalStyles.titulo1}>Unidade Básica de Atendimento (UBS)</Text>
            <Text style={localStyles.descricao}>As Unidades Básicas de Atendimento (UBS) se configuram como a porta de entrada no Sistema Único de Saúde (SUS). Ao se propor em prestar uma assistência mais próxima da população, torna-se possível a identificação, encaminhamento e acompanhamento de pacientes em sofrimento mental.</Text>
            <Botao title='Voltar' />
        </SafeAreaView>
        </ScrollView>
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