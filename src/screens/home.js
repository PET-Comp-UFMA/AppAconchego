import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'

import Titulo from "../componentes/Titulos/Titulo";
import BotaoEmoji from "../componentes/Botoes/Emoji";
import BotaoPadrao from "../componentes/Botoes/Padrao";
import GlobalColors from "../componentes/Global/GlobalColors";

export default function Home() {
    return(
        <SafeAreaView style={localStyles.container}>
            <Image style = {localStyles.logo} source={require('../../assets/logo.png')} />

            <Titulo
                title = 'Como está se sentindo hoje?'
            />

            <View style={localStyles.botoesEmoji}>
                <BotaoEmoji />
                <BotaoEmoji />
                <BotaoEmoji />
            </View>

            <View>
                <BotaoPadrao
                    title = 'Sobre o Aconchego'
                />
                <BotaoPadrao
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
        backgroundColor: GlobalColors.CorFundo
    },
    logo: {
        width: 206,
        marginBottom: 30
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