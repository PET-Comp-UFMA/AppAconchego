import React from 'react'
import { Image, SafeAreaView, Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import { useNavigation } from '@react-navigation/native'

export default function Teste2Int(){

    const navigation = useNavigation();
    
    return(
        <SafeAreaView style={localStyles.container}>
            <Image source={require('../../../assets/vector.png')} style={localStyles.Imagem}/>
            <Text style={GlobalStyles.titulo1}>Avaliando o Sofrimento Mental</Text>
            <Text style={GlobalStyles.descricao}>É um instrumento que detecta sintomas relacionados a problemas de saúde mental. Composto de 20 itens, com relação aos últimos 30 dias. Pode ser considerado um teste de triagem para detecção de sintomas importantes na área da saúde mental.</Text>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar' />
                    <BotaoPeqProx title='Próximo' onPress={() => navigation.navigate('Teste2P1')} />
                </View>
                <Image source={require('../../../assets/figavaliacao.png')}/>
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
    Imagem: {
        tintColor: '#0066FF',
        height: 80,
        width: 72
    }    
    }
)