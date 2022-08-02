import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Titulo from "../componentes/Titulos/Titulo";
import BotaoEmoji from "../componentes/Botoes/Emoji";
import BotaoPadrao from "../componentes/Botoes/Padrao";
import GlobalColors from "../componentes/Global/GlobalColors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {

    const navigation = useNavigation();

    const [sadActive, setSadActive] = useState(false)
    const [normalActive, setNormalActive] = useState(false)
    const [happyActive, setHappyActive] = useState(false)

    async function handleSad () {
        setNormalActive(false)
        setHappyActive(false)
        setSadActive(current => !current)
        handleNew('triste')
    }

    async function handleNormal () {
        setHappyActive(false)
        setSadActive(false)
        setNormalActive(current => !current)
        handleNew('normal')
    }

    async function handleHappy () {
        setSadActive(false)
        setNormalActive(false)
        setHappyActive(current => !current)
        handleNew('feliz')
    }


    const getCurrentDate=()=>{
        let totalDate
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
  
        totalDate =(month > 10) ? (year + '-' + month + '-' + date) : (year + '-0' + month + '-' + date);
        return totalDate;
    }

    async function handleNew (emocao) {
        let date = getCurrentDate()
        // Pega o valor que já tava lá
        const json = await AsyncStorage.getItem('@saveemoji:emoji')
        var response = {}
        if (json != null) {
            response = JSON.parse(json)
        }

        // Pegar a data
        const data = date.split("-")
        if (data[2].length < 2) {
            data[2] = "0" + data[2]
        }

        // Botar o novo dia no json
        response[data] = {emocao}
        
        await AsyncStorage.setItem('@saveemoji:emoji', JSON.stringify(response))
    }


    return(
        <SafeAreaView style={localStyles.container}>
            <Image style={localStyles.logo} source={require('../../assets/logo.png')} />

            <Titulo
                title = 'Como está se sentindo hoje?'
            />

            <View style={localStyles.botoesEmoji}>
                <BotaoEmoji emoji='triste' color={sadActive? GlobalColors.CorSecundaria : GlobalColors.CorAcao} onPress = {handleSad} />
                <BotaoEmoji emoji='normal' color={normalActive? GlobalColors.CorSecundaria : GlobalColors.CorAcao} onPress = {handleNormal} />
                <BotaoEmoji emoji='feliz' color={happyActive? GlobalColors.CorSecundaria : GlobalColors.CorAcao} onPress = {handleHappy} />
            </View>

            <View>
                <BotaoPadrao
                    onPress={() => navigation.navigate('sobre o aconchego')}
                    title = 'Sobre o Aconchego'
                />
                <BotaoPadrao
                    onPress={() => navigation.navigate('meus registros')}
                    title = 'Meus Registros'
                />
            </View>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    },
    logo: {
        marginBottom: 30,
        width: 200,
        height: 200
    },
    botoesEmoji: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        marginVertical: 20
    }
});