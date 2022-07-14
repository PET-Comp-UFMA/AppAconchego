import React from 'react'
import { SafeAreaView, Image, Text, StyleSheet, View, Dimensions  } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado21(){

    const navigation = useNavigation();
    
    return(
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.container2}>
            <Text style={GlobalStyles.resposta}>Resultado</Text>
            <Text style={GlobalStyles.titulo1}>Seu resultado requer atenção</Text>
            </View>
            <View style={localStyles.container2}>
                <Text style={GlobalStyles.titulo2}>Atenção! Seu resultado apontou sinais de sofrimento mental. Fique atento às situações negativas e busque ajuda em um serviço de saúde mental  caso esses sinais aumentem.</Text>
            </View>
            <View style={localStyles.container2}>
            <Botao title='Preciso de Apoio' onPress={() => navigation.navigate('canais de apoio')}/>
            <Botao title='Voltar à tela de Avaliação' onPress={() => navigation.navigate('Aconchego')}/>
            </View>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
        paddingTop: 40
        },
        container2:{
            paddingTop: 50,
            paddingBottom: 50,
            alignItems: 'center',
            textAlign: 'justify'
        },

})