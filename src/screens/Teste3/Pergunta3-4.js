import React from 'react'
import { SafeAreaView, Image, Text, StyleSheet, View, Dimensions, ScrollView} from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'

export default function Pergunta34(){

    const navigation = useNavigation();
    
    return(
        <SafeAreaView style={localStyles.container}>
            <ScrollView>
                <View>
                    <Text style={GlobalStyles.titulo1}>Você consegue encaixar a prática da atividade física na sua rotina?</Text>
                </View>
                <View style={localStyles.container2}>
                    <BotaoEscolhaTeste
                        number = {0}
                        title = 'Sim'
                    />
                    <BotaoEscolhaTeste
                        number = {1}
                        title = 'Não'
                    />
                </View>
            </ScrollView>
            <View style={GlobalStyles.botoesTeste}>
                <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste3P3')} />
                <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste3R4')}/>
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
        paddingTop: 40
        },
    container2:{
        paddingTop: 50,
        paddingBottom: 50
    }
    }
)