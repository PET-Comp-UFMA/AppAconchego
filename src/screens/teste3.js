import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet
} from 'react-native'

import Avaliacao from "../componentes/Botoes/Avaliacao";

export default function Teste3() {
    return(
        <SafeAreaView style={localStyles.container}>
            <View>
                <Avaliacao
                    title = 'Avaliando ansiedade, depressão e estresse'
                />
                <Avaliacao
                    title = 'Avaliando o sofrimento mental'
                />
                <Avaliacao
                    title = 'Avaliando os cuidados em saúde mental'
                />
            </View>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});