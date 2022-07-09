import React from 'react'
import { Image, SafeAreaView, Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'

export default function Resultado38(){
    return(
    <SafeAreaView style={localStyles.container}>
         <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View >
            <Text style={GlobalStyles.descricao}>Sim. Segundo Fráguas, atividades como ioga e meditação têm eficácia reconhecida na redução do quadro depressivo. Ele explica que essas práticas atuam na sequência de reações cerebrais e hormonais que regulam o cortisol, diminuindo sua liberação. Vale lembrar que o cortisol é um hormônio relacionado ao estresse e, quando em excesso, pode levar à depressão, ansiedade, entre outros problemas.</Text>
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