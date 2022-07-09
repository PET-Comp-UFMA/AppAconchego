import React from 'react'
import { Image, SafeAreaView, Text, StyleSheet, View, Dimensions } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'

export default function Resultado32(){
    return(
    <SafeAreaView style={localStyles.container}>
        <View >
            <Text style={localStyles.resposta}>Resposta Correta:</Text><Text style={GlobalStyles.descricao}>Sim, O estresse é um importante fator para desencadear a depressão, principalmente o primeiro episódio. Segundo Fráguas, o apoio do cônjuge, família e amigos, assim como dos pais, em particulas para ciranças e adolescentes tem papel fundamenta na proteção contra a doença.
            “O suporte social, seja por meio de incentivos, trocas de ideias, amparo e auxilio na resolução de problemas ajuda a lidar melhor com o estresse e contribui para a promoção da saúde emocional.”.</Text>
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