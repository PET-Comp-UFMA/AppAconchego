import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import GlobalColors from '../../componentes/Global/GlobalColors'

import MenuApoio from '../../componentes/Botoes/MenuApoio'

import RotasBottom from '../../rotas'

export default function SaibaMais(){
    return(
        <SafeAreaView style={localStyles.container}>
            <MenuApoio />
        </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    }
})