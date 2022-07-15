import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'
import { Calendar, LocaleConfig } from 'react-native-calendars'

export default function Registros(){

    LocaleConfig.locales['br'] = {
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    }
    LocaleConfig.defaultLocale='br'
    
    const navigation = useNavigation();

    return(
        <ScrollView contentContainerStyle={{flex: 1}}>
        <SafeAreaView style={localStyles.container}>
            
            <Calendar
                style={localStyles.calendario}
                minDate={"2022/07/14"}
                onDayPress={(e) => {
                    alert(`Nenhum registro para o dia ${e.day}/${e.month}/${e.year}`)
                }}
                enableSwipeMonths
            />

            <Botao title='Voltar à Tela Principal' onPress={() => navigation.navigate('Aconchego')} />

        </SafeAreaView>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    },
    calendario: {
        height: 360,
        width: (Dimensions.get('window').width - 40),
        marginTop: 20
    },
})
