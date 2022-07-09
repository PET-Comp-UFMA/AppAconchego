import React from 'react'
import { Image, SafeAreaView, Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'

export default function Resultado36(){
    return(
    <SafeAreaView style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView>
            <View >
                <Text style={GlobalStyles.descricao}>Sim. Ter um hobby contribui para minimizar e prevenir a depressão. “Atividades como tocar música, pintar , fazer artesanato, quando realizadas em grupo, ainda trazem o benefício de despertar o sentimento de pertencimento, oferecer estimulação cognitiva e o eventual suporte social. E mais: o hobby, constituindo uma atividade de auto expressão, criatividade  e satisfação, estimula circuitos cerebrais de prazer e recompensa, que modulam emoções positivas, como alegria e prazer. Nos quadros depressivos por exemplo, esses circuitos não estão eficazmente regulados”, explica o psiquiatra.</Text>
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