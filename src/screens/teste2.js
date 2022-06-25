import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet
} from 'react-native'

import BotaoEscolhaTeste from "../componentes/Botoes/EscolhaTeste";

export default function Teste2() {
    return(
        <SafeAreaView style={localStyles.container}>
            <View>
                <BotaoEscolhaTeste
                    number = {0}
                    title = 'Não se aplicou de maneira alguma'
                />
                <BotaoEscolhaTeste
                    number = {1}
                    title = 'Aplicou-se em algum grau ou por pouco tempo'
                />
                <BotaoEscolhaTeste
                    number = {2}
                    title = 'Aplicou-se em um grau considerável ou por uma boa parte do tempo'
                />
                <BotaoEscolhaTeste
                    number = {3}
                    title = 'Aplicou-se muito ou na maioria do tempo'
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