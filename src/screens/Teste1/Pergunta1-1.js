import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'

export default function Pergunta11(){
    
    const navigation = useNavigation();

    return(
        <SafeAreaView style={localStyles.container}>
            <ScrollView>
                <View>
                    <Text style={GlobalStyles.titulo1}>Achei difícil me acalmar</Text>
                </View>
            
                <View style={localStyles.container2}>
                    
                    <BotaoEscolhaTeste
                        number = {0}
                        title = 'Não se aplicou de maneira alguma'
                    />
                    <BotaoEscolhaTeste
                        number = {1}
                        title = 'Aplicou-se em algum grau ou por pouco tempo'
                    />
                    <BotaoEscolhaTeste
                        number = {2}
                        title = 'Aplicou-se em um grau considerável ou por uma boa parte do tempo'
                    />
                    <BotaoEscolhaTeste
                        number = {3}
                        title = 'Aplicou-se muito ou na maioria do tempo'
                    />
                </View>
            </ScrollView>
            <View style={GlobalStyles.botoesTeste}>
                <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste1Int')} />
                <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste1P2')} />
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