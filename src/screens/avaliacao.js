import React from "react";
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

import Logo from '../../assets/logo.svg'
import Titulo from "../componentes/Titulos/Titulo";
import BotaoAvaliacao from '../componentes/Botoes/Avaliacao'
import GlobalColors from "../componentes/Global/GlobalColors";

export default function Avaliacao() {
    return(
        <View style={localStyles.container}>
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
        paddingTop: 64,
    },
    botoesAvaliacao: {
        marginTop: 24
    }
});