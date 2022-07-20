import React, { useState } from "react";
import {
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

export default function Home() {

    const navigation = useNavigation();

    const [sadActive, setSadActive] = useState(false)
    const [normalActive, setNormalActive] = useState(false)
    const [happyActive, setHappyActive] = useState(false)

    const handleSad = () => {
        setNormalActive(false)
        setHappyActive(false)
        setSadActive(current => !current)
    }

    const handleNormal = () => {
        setHappyActive(false)
        setSadActive(false)
        setNormalActive(current => !current)
    }

    const handleHappy = () => {
        setSadActive(false)
        setNormalActive(false)
        setHappyActive(current => !current)
    }

    return(
        <View style={localStyles.container}>
            <Image style={localStyles.logo} source={require('../../assets/logo.png')} />

            <Titulo
                title = 'Como está se sentindo hoje?'
            />

            <View style={localStyles.botoesEmoji}>
                <BotaoEmoji emoji='triste' color={sadActive? '#153B50' : GlobalColors.CorAcao} onPress = {handleSad} />
                <BotaoEmoji emoji='normal' color={normalActive? '#153B50' : GlobalColors.CorAcao} onPress = {handleNormal} />
                <BotaoEmoji color={happyActive? '#153B50' : GlobalColors.CorAcao} onPress = {handleHappy} />
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
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    },
    logo: {
        marginBottom: 30,
        marginTop: 35,
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