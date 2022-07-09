import React from 'react'
import { Image, SafeAreaView, Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'

export default function Resultado35(){
    return(
    <SafeAreaView style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View >
                <Text style={GlobalStyles.descricao}>Não. A exposição ao sol permite que a vitamina D2 seja transformada em vitamina D3, que desempenha funções importantes no sistema nervoso central, ela ativa por exemplo uma enzima (triptofano hidroxilase 2) qua atua na transformação do triptofano em serotonina cerebral, um neurotransmissor relacionado ao humor. Por outro lado, níveis reduzidos de vitamina D podem levar a uma ativação disfuncional da serotonina, contribuindo para o surgimento da depressão.</Text>
            </View>
        </ScrollView>
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