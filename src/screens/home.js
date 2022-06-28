import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'

import Logo from '../../assets/logo.svg'
import Titulo from "../componentes/Titulos/Titulo";
import BotaoEmoji from "../componentes/Botoes/Emoji";
import BotaoPadrao from "../componentes/Botoes/Padrao";
import GlobalColors from "../componentes/Global/GlobalColors";

export default function Home() {
    return(
        <SafeAreaView style={localStyles.container}>
            <Logo style={localStyles.logo} />

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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    },
    logo: {
        marginTop: 20,
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