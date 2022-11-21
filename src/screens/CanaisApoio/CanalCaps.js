import React from 'react'
import { Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import GlobalColors from '../../componentes/Global/GlobalColors'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import Botao from '../../componentes/Botoes/Padrao'
import { ScrollView } from 'react-native-gesture-handler'

export default function CanalCaps(){
    return(
        <ScrollView>
        <SafeAreaView style={localStyles.container}>
            <Image source={require('../../../assets/apoio.png')} />
            <Text style={GlobalStyles.titulo1}>Centro de Atenção Psicossocial (CAPS)</Text>
            <Text style={GlobalStyles.descricao}>Os Centros de Atenção Psicossocial - CAPS nas suas diferentes modalidades são pontos de atenção estratégicos da Rede de Atenção Psicossocial (RAPS): serviços de saúde de caráter aberto e comunitário constituído por equipe multiprofissional e que atua sobre a ótica interdisciplinar e realiza atendimentos nos mais variados âmbitos da saúde mental. No CAPS você encontrará profissionais capacitados e o apoio necessário para um tratamento completo, humanizado e individualizado.</Text>
            <Botao title='Voltar'/>
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
    }
}
)