import React from "react";
import {
    View,
    StyleSheet,
    Image
} from 'react-native'

import Titulo from "../componentes/Titulos/Titulo";
import BotaoAvaliacao from '../componentes/Botoes/Avaliacao'
import GlobalColors from "../componentes/Global/GlobalColors";

export default function Avaliacao() {
    return(
        <View style={localStyles.container}>
            <Image style={localStyles.imagem} source={require('../../assets/figavaliacao.png')}/>

            <Titulo
                title = 'Escolha um teste para responder'
            />

            <View style={localStyles.botoesAvaliacao}>
                <BotaoAvaliacao
                    title = 'Avaliando ansiedade, depressão e estresse'
                />
                <BotaoAvaliacao
                    title = 'Avaliando o sofrimento mental'
                />
                <BotaoAvaliacao
                    title = 'Avaliando os cuidados em saúde mental'
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
        paddingTop: 36,
    },
    botoesAvaliacao: {
        marginTop: 6
    },
    imagem: {
        position: "absolute",
        bottom: -1,
        left: 5,
        width: 280,
        height: 160
    }
});