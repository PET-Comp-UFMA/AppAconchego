import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View, Dimensions, ScrollView} from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'

export default function Pergunta110(props){

    var respostas = props.route.params.respostas

    const navigation = useNavigation();

    const [umAtivado, setUmAtivado] = useState(false)
    const [doisAtivado, setDoisAtivado] = useState(false)
    const [tresAtivado, setTresAtivado] = useState(false)
    const [quatroAtivado, setQuatroAtivado] = useState(false)

    const handleUm = () => {
        setDoisAtivado(false)
        setTresAtivado(false)
        setQuatroAtivado(false)
        respostas.p10 = 0
        setUmAtivado(current => !current)
    }

    const handleDois = () => {
        setUmAtivado(false)
        setTresAtivado(false)
        setQuatroAtivado(false)
        respostas.p10 = 1
        setDoisAtivado(current => !current)
    }

    const handleTres = () => {
        setUmAtivado(false)
        setDoisAtivado(false)
        setQuatroAtivado(false)
        respostas.p10 = 2
        setTresAtivado(current => !current)
    }

    const handleQuatro = () => {
        setUmAtivado(false)
        setDoisAtivado(false)
        setTresAtivado(false)
        respostas.p10 = 3
        setQuatroAtivado(current => !current)
    }

    return(
        <SafeAreaView style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.container2}>
                    <Text style={GlobalStyles.titulo1}>10. Senti que não tinha nada a desejar</Text>
                </View>
                
                <View style={localStyles.container2}>
                    
                    <BotaoEscolhaTeste 
                        color = {umAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {0}
                        title = 'Não se aplicou de maneira alguma'
                        onPress = {handleUm}
                    />
                    <BotaoEscolhaTeste
                        color = {doisAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {1}
                        title = 'Aplicou-se em algum grau ou por pouco tempo'
                        onPress = {handleDois}
                    />
                    <BotaoEscolhaTeste
                        color = {tresAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {2}
                        title = 'Aplicou-se em um grau considerável ou por uma boa parte do tempo'
                        onPress = {handleTres}
                    />
                    <BotaoEscolhaTeste
                        color = {quatroAtivado? GlobalColors.CorSecundaria : GlobalColors.CorAcao}
                        number = {3}
                        title = 'Aplicou-se muito ou na maioria do tempo'
                        onPress = {handleQuatro}
                    />
                    </View>

            </ScrollView>
                <View style={GlobalStyles.botoesTeste}>
                    <BotaoPeqVol title='Voltar' onPress={() => navigation.navigate('Teste1P9', {respostas: respostas})}/>
                    <BotaoPeqProx title='Próximo' onPress={() => {
                        if(umAtivado == false && doisAtivado == false && tresAtivado == false && quatroAtivado == false){
                            if(Platform.OS == 'android'){
                                ToastAndroid.show('Selecione uma resposta', ToastAndroid.BOTTOM)
                            }
                        }else{navigation.navigate('Teste1P11', {respostas: respostas})}}}/>
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
            alignItems: 'center',
            paddingTop: 50,
            paddingBottom: 50
    }
    }
)