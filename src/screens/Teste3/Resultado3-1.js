import React from 'react'
import { Image, SafeAreaView, Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import Botao from '../../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'

export default function Resultado31({route}){

    let resultado = route.params?.resposta

    const navigation = useNavigation();
    
    return(
    <View style={localStyles.container}>
        <Text style={localStyles.resposta}>Resposta Correta:</Text>
        <ScrollView style={{height: '100%'}}>
                <Text style={GlobalStyles.descricao}>
                    Sim, Adotar um bom hábito de sono auxilia na preservação da sáude física e mental. “O momento de repouso é fundamental e sua falta acarreta um estado pró-inflamatório que prejudica o organismo e facilita o surgimento de doenças como depressão. 
                    Ter um horário habitual para despertar auxilia o ciclo fisiológico e mantém o organismo saudável”, explica o psiquiatra.{'\n'} 
                </Text>    
        </ScrollView>
        <View>
            <Botao title='Próximo' onPress={() => navigation.navigate('Teste3P2', {resposta: resultado})} />
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
        textAlign: 'justify',
        maxWidth: 330
        }
    }
)