import React, { useState } from 'react'
import { SafeAreaView, Image, Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'

export default function Pergunta39({route}){

    const navigation = useNavigation();

    const [umAtivado, setUmAtivado] = useState(false)
    const [doisAtivado, setDoisAtivado] = useState(false)

    let resultado = route.params?.resposta

    const handleUm = () => {
        setDoisAtivado(false)
        setUmAtivado(current => !current)
    }

    const handleDois = () => {
        setUmAtivado(false)
        setDoisAtivado(current => !current)
    }
    
    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={localStyles.container}>
                <View>
                    <Text style={GlobalStyles.titulo1}>9. Você lida bem com suas emoções? Por exemplo, caso se sinta agustiado(a) ou triste, observa se esse sentimento vai além da tristeza habitual?</Text>
                </View>
                <View style={localStyles.container2}>
                <BotaoEscolhaTeste
                    color = {umAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                    number = {0}
                    title = 'Sim'
                    onPress = {handleUm}
                />
                <BotaoEscolhaTeste
                    color = {doisAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                    number = {1}
                    title = 'Não'
                    onPress = {handleDois}
                />
                </View>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste3P8')} />
                    <BotaoPeqProx title='Próximo' onPress={() => {
                        if(umAtivado == false && doisAtivado == false){
                            if(Platform.OS == 'android'){
                                ToastAndroid.show('Selecione uma resposta', ToastAndroid.BOTTOM)
                            }
                        }
                        else{
                            navigation.navigate('Teste3R9', {resposta: umAtivado? 1 : 0})}}
                        }/>
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