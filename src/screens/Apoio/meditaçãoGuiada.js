import React from "react";
import {
    View,
    StyleSheet,
    Linking,
    ScrollView,
    SafeAreaView
} from 'react-native'

import BotaoMeditacao from "../../componentes/Botoes/Meditacao";
import GlobalColors from "../../componentes/Global/GlobalColors";

export default function MeditacaoGuiada() {
    const meditacaoGuiada = [
        {
            thumb: require(`../../../assets/guiada/1.jpg`),
            canal: 'Tadashi Kadomoto',
            nome: 'Meditação para ansidade (Guiada)',
            url: 'https://www.youtube.com/watch?v=cuAGVyfCt5o'
        },
        {
            thumb: require(`../../../assets/guiada/2.jpg`),
            canal: 'Poetoterapia por Lázaro Ramon',
            nome: 'Meditação Guiada (Autohipnose)',
            url: 'https://www.youtube.com/watch?v=7x2AXkpjG8U'
        },
        {
            thumb: require(`../../../assets/guiada/3.jpg`),
            canal: 'AlquimiAstro',
            nome: 'Comece bem o seu dia',
            url: 'https://www.youtube.com/watch?v=pufeBSbqzX4'
        },
        {
            thumb: require(`../../../assets/guiada/4.jpg`),
            canal: 'Nando Pinheiro',
            nome: 'Meditação Guiada - 15 minutos de Limpeza Energética',
            url: 'https://www.youtube.com/watch?v=LTFEbpMJPPU'
        },
        {
            thumb: require(`../../../assets/guiada/5.jpg`),
            canal: 'Nanda Bianchi Terapias Holísticas',
            nome: 'O Silêncio e a sua saúde',
            url: 'https://www.youtube.com/watch?v=KBdfPpHUF0A'
        },
        {
            thumb: require(`../../../assets/guiada/6.jpg`),
            canal: 'Casa Shanti',
            nome: 'Meditação Guiada - Brahma Kumaris',
            url: 'https://www.youtube.com/watch?v=zfaMvi-asao'
        },
        {
            thumb: require(`../../../assets/guiada/7.jpg`),
            canal: 'Gustavo Takeda',
            nome: 'Meditação Guiada da KUNDALINI',
            url: 'https://www.youtube.com/watch?v=fCYaOJ_uqeA'
        },
        {
            thumb: require(`../../../assets/guiada/8.jpg`),
            canal: 'Poetoterapia por Lázaro Ramon',
            nome: 'Meditação Guiada - Limpeza Emocional',
            url: 'https://www.youtube.com/watch?v=EBSjbPQm_qo'
        },
        {
            thumb: require(`../../../assets/guiada/9.jpg`),
            canal: 'Camila Zen',
            nome: 'Meditação Guiada | Seja como a água',
            url: 'https://www.youtube.com/watch?v=xYKwCeQ48cE'
        },
        {
            thumb: require(`../../../assets/guiada/10.jpg`),
            canal: 'Meditando por Juliana Tamietti',
            nome: 'Meditação para Insights e Ideias Geniais',
            url: 'https://www.youtube.com/watch?v=tmPoxPanoBQ'
        },
        {
            thumb: require(`../../../assets/guiada/11.jpg`),
            canal: 'Camila Zen',
            nome: 'Meditando para medo',
            url: 'https://www.youtube.com/watch?v=insUDUvVqHQ'
        },
    ]

    return(
        <SafeAreaView style={localStyles.container}>
            <ScrollView>
                <View style={localStyles.buttonsContainer}>
                    {meditacaoGuiada.map((video, i) => (
                        <View key = {i}>
                            <BotaoMeditacao
                                nome = {video.nome}
                                canal = {video.canal}
                                thumb = {video.thumb}
                                onPress = {() => {Linking.openURL(video.url)}}
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