import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ScrollView, View, Dimensions, Image } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Botao from '../componentes/Botoes/Padrao'
import { useNavigation } from '@react-navigation/native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import Titulo from '../componentes/Titulos/Titulo'
import SubTitulo from '../componentes/Titulos/Subtitulo'
import { Entypo } from '@expo/vector-icons'
import BotaoEmoji from '../componentes/Botoes/Emoji'
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  
        totalDate =(month > 10) ? (year + '-' + month + '-' + date) : (year + '-0' + month + '-' + date);
        return totalDate;
    }

    const getFormatedDate=()=>{
        let totalDate
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
  
        totalDate =(month > 10) ? (date + '/' + month + '/' + year) : (date + '/0' + month + '/' + year);
        return totalDate;
    }

    const getFormatedCalendarDate=(date)=>{
        let totalDate
        let day = date.day
        let month = date.month;
        let year = date.year;
  
        totalDate =(month > 10) ? (day + '/' + month + '/' + year) : (day + '/0' + month + '/' + year);
        return totalDate;
    }

    const [day, setDay] = useState(getCurrentDate())
    const [marked, setMarked] = useState({getCurrentDate : { selected: true }})

    const getSelectedDayEvents = (date) => {
        let markedDates = {};
        markedDates[date] = { selected: true };
        setMarked(markedDates)
    };

// setando estados para useEffect

    const [humor, setHumor] = useState(<Text style={GlobalStyles.resultado}>
        Não existem dados registrados para este teste do dia {getFormatedDate()}.
    </Text>)

    const [ansiedade, setAnsiedade] = useState(<Text style={GlobalStyles.resultado}>
        Não existem dados registrados para este teste do dia {getCurrentDate()}.
    </Text>)

    const [sofrimento, setSofrimento] = useState(<Text style={GlobalStyles.resultado}>
        Não existem dados registrados para este teste do dia {getFormatedDate()}.
    </Text>)

    const [cuidados, setCuidados] = useState(<Text style={GlobalStyles.resultado}>
        Não existem dados registrados para este teste do dia {getFormatedDate()}.
    </Text>)

    const [imgAnsiedade, setImgAnsiedade] = useState()
    
    const [imgSofrimento, setImgSofrimento] = useState()

    const [imgCuidados, setImgCuidados] = useState()

// resultado do botão emoji

    async function handleEmoji(day = getCurrentDate(), date) {
        const response = await AsyncStorage.getItem('@saveemoji:emoji')
        const data = response ? JSON.parse(response) : {};
        data[day] ? setHumor(<BotaoEmoji emoji={data[day].emocao} color={GlobalColors.CorAcao} />) : setHumor(<Text style={GlobalStyles.resultado}>
                Não existem dados registrados para este teste do dia {day}.
            </Text>)
    }

// resultado teste 1 Teste Avaliando ansiedade, depressão e estresse

function resultadoAnsiedade(result) {
    console.log(result)
    if(result <= 7){
        setAnsiedade(
            <View>
                <Text style={GlobalStyles.resultado}>
                Sua pontuação sobre a dimensão de depressão, ansiedade e estresse demonstra que você possui relativo bem estar mental
                </Text>
            </View>
        )
    } else if (result <= 14) {
        setAnsiedade(
            <View>
                <Text style={GlobalStyles.resultado}>
                Sua pontuação na escala de ansiedade, depressão e estresse foi ligeramente elevada. Entretanto, você não se encontra em níveis que coloam em risco sua saúde.
                </Text>
            </View>
        )
    } else{
        setAnsiedade(
            <View>
                <Text style={GlobalStyles.resultado}>
                Sua pontuação na escala de ansiedade, depressão e estresse foi elevada. É importante falar com o seu médico a fim de traçar uma codunta.
                </Text>
            </View>
        )
    }
}


async function handleAnsiedade(day = getCurrentDate(), date) {
        const response = await AsyncStorage.getItem('@savesavaliacao:ansiedade')
        const data = response ? JSON.parse(response) : {};
        data[day] ? resultadoAnsiedade(data[day].resultado):
            setAnsiedade(<Text style={GlobalStyles.resultado}>
                Não existem dados registrados para este teste do dia {day}.
            </Text>
        )
        data[day] ?
        renderImageAnsiedade()
        :
        setImgAnsiedade()
        
}

function renderImageAnsiedade() {
    setImgAnsiedade(
        <Image style={localStyles.imageAnsiedade} source={require('../../assets/ansiedade.png')} />
    )
}



    

// Resultados do teste 2: Teste Avaliando sofrimento mental

    function resultadoSofrimento(result) {
        if(result <= 7){
            setSofrimento(
                <View>
                    <Text style={GlobalStyles.resultado}>
                    Parabéns! Seu resultado apontou ausência de sinais de sofrimento mental. Continue tendo comportamentos e atitudes positivas e cuidando de sua saúde mental.
                    </Text>
                </View>
            )
        } else {
            setSofrimento(
                <View>
                    <Text style={GlobalStyles.resultado}>
                    Atenção! Seu resultado apontou sinais de sofrimento mental. Fique atento às situações negativas e busque ajuda em um serviço de saúde mental  caso esses sinais aumentem.
                    </Text>
                </View>
            )
        }
    }

    function renderImageSofrimento() {
        setImgSofrimento(
            <Image style={localStyles.imageSofrimento} source={require('../../assets/sofrimento.png')} />
        )
    }

    async function handleSofrimento(day = getCurrentDate(), date) {
        const response = await AsyncStorage.getItem('@savesavaliacao:sofrimento')
        const data = response ? JSON.parse(response) : {};
        data[day] ?
            resultadoSofrimento(data[day].resultado)
            :
            setSofrimento(
                <Text style={GlobalStyles.resultado}>
                    Não existem dados registrados para este teste do dia {day}.
                </Text>
            )
        data[day] ?
            renderImageSofrimento()
            :
            setImgSofrimento()
    }

// Resultados do teste 3: Teste Avaliando os cuidados em saúde mental

    function resultadoCuidados(result) {
        if(result <= 4){
            setCuidados(
                <View>
                    <Text style={GlobalStyles.resultado}>
                    Tenha muita atenção aos seus hábitos e comportamentos. Adote uma rotina saudável também para sua mente. Pratique atividade física, siga uma alimentação nutritiva e equilibrada, cultive um hobby que lhe dê prazer, conviva com amigos e familiares. E informe-se sobre a depressão, pois a informação é o melhor caminho para identificar os sinais da doença e/ou apoiar quem sofre de depressão.
                    </Text>
                </View>
            )
        } else if (result <= 7){
            setCuidados(
                <View>
                    <Text style={GlobalStyles.resultado}>
                    Parabéns, você já está cuidando da sua saúde mental. Mas sempre dá para melhorar, certo? Confira no teste quais respostas você errou e tente incorporar hábitos mais saudáveis ao seu dia a dia. Pratique atividade física, durma bem, siga uma alimentação nutritiva e equilibrada, cultive um hobby que lhe dê prazer, conviva com amigos e familiares. E informe-se sobre a depressão.
                    </Text>
                </View>
            )
        } else {
            setCuidados(
                <View>
                    <Text style={GlobalStyles.resultado}>
                    Excelente, você sabe cuidar da sua saúde mental, parabéns. Ainda assim, vale a pena ampliar seu conhecimento sobre a depressão e saber, além das formas de prevenção, quais são os sinais da doença, os tratamentos e como apoiar quem sofre do transtorno. Disseminar boas informações a respeito da depressão é o caminho para construirmos uma sociedade mais empática. 
                    </Text>
                </View>
            )
        }
    }

    function renderImageCuidados() {
        setImgCuidados(
            <Image style={localStyles.imageCuidados} source={require('../../assets/cuidados.png')} />
        )
    }

    async function handleCuidados(day = getCurrentDate(), date) {
        const response = await AsyncStorage.getItem('@savecuidados:cuidados')
        const data = response ? JSON.parse(response) : {};
        data[day] ?
            resultadoCuidados(data[day].resultado)
            :
            setCuidados(
                <Text style={GlobalStyles.resultado}>
                    Não existem dados registrados para este teste do dia {day}.
                </Text>
            )
        data[day] ?
            renderImageCuidados()
            :
            setImgCuidados()
    }

// Renderizando os resultados na tela ao abrir os registros

    useEffect(() => {
        handleEmoji()
        handleAnsiedade()
        handleSofrimento()
        handleCuidados()
    },[])


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
                        handleEmoji(e.dateString, e)
                        handleAnsiedade(e.dateString, e)
                        handleSofrimento(e.dateString, e)
                        handleCuidados(e.dateString, e)
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

                {humor}

                <Text style={GlobalStyles.subtitulo}>
                    Teste Avaliando Ansiedade, Depressão e Estresse
                </Text>
                {ansiedade}

                {imgAnsiedade}

                <Text style={GlobalStyles.subtitulo}>
                    Teste Avaliando sofrimento mental
                </Text>

                {sofrimento}

                {imgSofrimento}

                <Text style={GlobalStyles.subtitulo}>
                    Teste Avaliando os cuidados em saúde mental
                </Text>

                {cuidados}

                {imgCuidados}

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
    imageSofrimento: {
        width:120,
        height: 130,
        marginTop: 30,
        marginBottom: 20
    },
    imageCuidados: {
        width:160,
        height: 130,
        marginTop: 30,
        marginBottom: 30
    },
    imageAnsiedade: {
        width:217,
        height: 160,
        marginTop: 30,
        marginBottom: 30
    }
})
