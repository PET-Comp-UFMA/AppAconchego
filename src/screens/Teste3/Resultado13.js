import React from 'react'
import { Image, SafeAreaView, Text, StyleSheet, View, Dimensions } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'

export default function Resultado13(){
    return(
    <SafeAreaView style={localStyles.container}>
        <View >
            <Text style={localStyles.resposta}>Resposta Correta:</Text><Text style={GlobalStyles.descricao}>Sim, Adotar um bom hábito de sono auxilia na preservação da sáude física e mental. “O momento de repouso é fundamental e sua falta acarreta um estado pró-inflamatório que prejudica o organismo e facilita o surgimento de doenças como depressão. ter um horário habitual para despertar auxilia o ciclo fisiológico e mantém o organismo saudável”, explica o psiquiatra. </Text>
        </View>
        <View>
            <Botao title='Próximo' />
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