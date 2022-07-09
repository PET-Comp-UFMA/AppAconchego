import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView,
    SafeAreaView
} from 'react-native'

import BotaoMidias from "../../componentes/Botoes/Midia";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function Filmes() {
    const series = [
        {
            name: 'Um banho de Vida (2019)',
            url: 'https://www.netflix.com/br/title/81078961'
        },
        {
            name: 'Mimi (2021)',
            url: 'https://www.netflix.com/br/title/81267360'
        },
        {
            name: 'Você nem Imagina (2020)',
            url: 'https://www.netflix.com/br/title/81005150'
        },
        {
            name: 'Meu eterno talvez (2019)',
            url: 'https://www.netflix.com/br/title/80202874'
        },
        {
            name: 'Viver duas vezes (2019)',
            url: 'https://www.netflix.com/br/title/80233408'
        },
    ]

    return(
        <SafeAreaView style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.buttonsContainer}>
                    {series.map((serie, i) => (
                        <View key = {i}>
                            <BotaoMidias
                                title = {serie.name}
                                onPress = {() => {Linking.openURL(serie.url)}}
                            />
                    </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalColors.CorFundo,
    },
    buttonsContainer: {
        paddingVertical: 12
    }
});