import React from 'react'
import { Image, SafeAreaView, Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado310(){

    const navigation = useNavigation();

    return(
    <View style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={GlobalStyles.descricao}>Sim. A procura por um psiquiatra ou psicólogo não está, necessariamente, vinculada a uma suspeita de doença. Talvez você esteja enfrentando um período de angústias, e uma conversa com o profissional vai ajudar a compreender com maior clareza seus sentimentos e emoções. Por outro  lado, se estiver realmente com um quadro depressivo, a busca por orientação de um psiquiatra é fundamental, pois somente o profissional terá condições de entender em profundidade os seus relatos e poderá recomendar o tratamento adequado. Ao mesmo tempo, é muito importante contar com o acompanhamento de um psicólogo, que vai auxiliar no processo de autoconhecimento e na gestão dos próprios sentimentos e emoções.</Text>
            </View>
        </ScrollView>
        <View>
            <Botao title='Próximo' />
        </View>
    </View>
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
        paddingTop: 50,
        },
    resposta: {
        color: GlobalColors.CorTextoForte,
        fontSize: 25,
        fontFamily: 'IBMPlexSans_Bold',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: 330
        }
    }
)