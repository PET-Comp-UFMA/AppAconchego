import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import Titulo from '../componentes/Titulos/Titulo'
import { Entypo } from '@expo/vector-icons'
import BotaoEmoji from '../componentes/Botoes/Emoji'

export default function Registros(){

    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    LocaleConfig.locales['br'] = {
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    }
    LocaleConfig.defaultLocale='br'
    
    const navigation = useNavigation();

    const getCurrentDate=()=>{
        let totalDate
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
  
        totalDate =(month > 10) ? (year + '-0' + month + '-' + date) : (year + '-0' + month + '-' + date);
        return totalDate;
    }

    const [day, setDay] = useState(getCurrentDate())
    const [marked, setMarked] = useState({getCurrentDate : { selected: true }})

    console.log()

    const getSelectedDayEvents = (date) => {
        let markedDates = {};
        markedDates[date] = { selected: true };
        setMarked(markedDates)
    };
    
    console.log(marked)

    // console.log(day)

    return(
        <ScrollView>
            <View style={localStyles.container}>
                
                <Calendar
                    style={localStyles.calendario}
                    theme = {{
                        selectedDayBackgroundColor: GlobalColors.CorAcao,
                        selectedDayTextColor: '#FFF'
                    }}
                    renderArrow={
                        (direction) => direction == 'left' ?
                        <Entypo name='chevron-left' size={24} color={GlobalColors.CorAcao} /> :
                        <Entypo name='chevron-right' size={24} color={GlobalColors.CorAcao} />
                    }
                    monthFormat={'DD MM YYYY'}
                    onDayPress={(e) => {
                        setDay(e.dateString)
                        getSelectedDayEvents(e.dateString)
                    }}
                    enableSwipeMonths
                    renderHeader={date => {
                        return (<Text style={GlobalStyles.titulo2}>{month[date.getMonth()]}</Text>)
                    }}
                    markedDates={marked}
                />

                <Titulo
                    title = 'Resultado'
                />

                <Text style={GlobalStyles.subtitulo}>
                    Como você estava se sentindo?
                </Text>

                <BotaoEmoji emoji='normal' />

                <Text style={GlobalStyles.subtitulo}>
                    Teste Avaliando ansiedade, depressão e estresse
                </Text>

                <Text style={GlobalStyles.resultado}>
                    Não existem dados registrados para este teste do dia DD/MM/AAAA.
                </Text>

                <Text style={GlobalStyles.subtitulo}>
                    Teste Avaliando sofrimento mental
                </Text>

                <Text style={GlobalStyles.resultado}>
                    Não existem dados registrados para este teste do dia DD/MM/AAAA.
                </Text>

                <Text style={GlobalStyles.subtitulo}>
                    Teste Avaliando os cuidados em saúde mental
                </Text>

                <Text style={[GlobalStyles.resultado, {marginBottom: 40}]}>
                    Não existem dados registrados para este teste do dia DD/MM/AAAA.
                </Text>

                <Botao title='Voltar à Tela Principal' onPress={() => navigation.navigate('Aconchego')} />

            </View>
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
        paddingBottom: 40,
    },
    calendario: {
        height: 360,
        width: (Dimensions.get('window').width - 40),
        marginTop: 20,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: GlobalColors.CorTextoForte,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 10,
    },
})
