import React, { useState } from 'react'
import { SafeAreaView, Image, Text, StyleSheet, View, Dimensions, ScrollView  } from 'react-native'
import GlobalStyles from '../../componentes/Global/GlobalStyles'
import GlobalColors from '../../componentes/Global/GlobalColors'
import BotaoPeqProx from '../../componentes/Botoes/BotaoPequenoProx'
import BotaoPeqVol from '../../componentes/Botoes/BotaoPequenoVoltar'
import BotaoEscolhaTeste from '../../componentes/Botoes/EscolhaTeste'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Pergunta217({route}){

    const navigation = useNavigation();

    const [umAtivado, setUmAtivado] = useState(false)
    const [doisAtivado, setDoisAtivado] = useState(false)

    const handleUm = () => {
        setDoisAtivado(false)
        setUmAtivado(current => !current)
    }

    const handleDois = () => {
        setUmAtivado(false)
        setDoisAtivado(current => !current)
    }

    function irResultado() {
        let resultado = route.params?.resposta
        umAtivado? resultado++ : resultado = resultado
        handleNew(resultado)
        resultado <= 7 ? navigation.navigate('Teste2R1') : navigation.navigate('Teste2R2')
    }

    const getCurrentDate=()=>{
        let totalDate
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
  
        totalDate =(month > 10) ? (year + '-' + month + '-' + date) : (year + '-0' + month + '-' + date);
        return totalDate;
    }

    async function handleNew (resultado) {
        let date = getCurrentDate()

        const newSofrimento = new Object();
        newSofrimento[date] = {resultado}

        await AsyncStorage.setItem('@savesavaliacao:sofrimento', JSON.stringify(newSofrimento))
    }
    
    return(
        <SafeAreaView style={localStyles.container}>
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={localStyles.container2}>
                <Text style={GlobalStyles.titulo1}>17. Você se cansa com facilidade?</Text>
            </View>
            <Image source={require('../../../assets/relax.png')} style={localStyles.Imagem2}/>
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
            </ScrollView>
            <View style={GlobalStyles.botoesTeste}>
                <BotaoPeqVol title='Voltar'onPress={() => navigation.navigate('Teste2P16')} />
                <BotaoPeqProx title='Próximo' onPress={irResultado} />
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
        },
        container2:{
            paddingTop: 40,
            paddingBottom: 20, 
            alignItems: 'center'
        },
    Imagem2: {
        width: 280,
        height: 200
    }
    }
)