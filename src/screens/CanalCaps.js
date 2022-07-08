import React from 'react'
import { Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function CanalCaps(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={localStyles.container}>
            <Image source={require('../../assets/apoio.png')} />
            <Text style={GlobalStyles.titulo1}>Centro de Atenção Psicossocial (CAPS)</Text>
            <Text style={GlobalStyles.descricao}>Os Centros de Atenção Psicossocial (CAPS) nas suas diferentes modalidades são pontos de atenção estratégicos da Rede de Atenção Psicossocial (RAPS): serviços de saúde de caráter aberto e comunitário constituídos por equipe multiprofissional e que atua sob a ótica interdisciplinar e realiza...</Text>
            <Botao title='Voltar' onPress={() => navigation.goBack()}/>
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