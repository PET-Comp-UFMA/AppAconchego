import React from 'react'
import { SafeAreaView, Image, Text, StyleSheet, View, Dimensions, ScrollView} from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'

export default function Pergunta310(){

    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={localStyles.container}>
                <View>
                    <Text style={GlobalStyles.titulo1}>Se respondeu sim para a questão anterior, você procura ajuda especializada?</Text>
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
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste3P1')} />
                    <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste3R2')}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const localStyles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flexGrow: 1,
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