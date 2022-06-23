import React from "react";
import BotaoPadrao from "../componentes/Botoes/Padrao";
import {
    SafeAreaView,
    View,
    StyleSheet
} from 'react-native'

export default function Teste() {
    return(
        <SafeAreaView style={localStyles.container}>
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
        alignItems: 'center'
    }
});