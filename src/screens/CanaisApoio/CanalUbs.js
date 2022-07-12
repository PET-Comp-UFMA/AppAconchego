import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import GlobalColors from '../../componentes/Global/GlobalColors'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import Botao from '../../componentes/Botoes/Padrao'

export default function CanalUbs(){
    return(
        <SafeAreaView style={localStyles.container}>
            <Image source={require('../../assets/apoio.png')} />
            <Text style={GlobalStyles.titulo1}>Unidade Básica de Atendimento (UBS)</Text>
            <Text style={GlobalStyles.descricao}>As Unidades Básicas de Atendimento (UBS) se configuram como a porta de entrada no Sistema Único de Saúde (SUS). Ao se propor em prestar uma assistência mais próxima da população, torna-se possível a identificação, encaminhamento e acompanhamento de pacientes em sofrimento mental.</Text>
            <Botao title='Voltar' />
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