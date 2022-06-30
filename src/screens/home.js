import React from "react";
import {
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
        <View style={localStyles.container}>
            <Image style={localStyles.logo} source={require('../../assets/logo.png')}/>
            

            <Titulo
                title = 'Como está se sentindo hoje?'
            />

            <View style={localStyles.botoesEmoji}>
                <BotaoEmoji emoji="triste"/>
                <BotaoEmoji emoji="normal"/>
                <BotaoEmoji emoji="feliz"/>
            </View>

            <View>
                <BotaoPadrao
                    title = 'Sobre o Aconchego'
                />
                <BotaoPadrao
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
        width: 220,
        height: 220
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