import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import MenuApoio from '../componentes/Botoes/MenuApoio'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

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