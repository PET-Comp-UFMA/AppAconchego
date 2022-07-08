import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    View,
    Linking
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function MenuApoio () {

    const navigation = useNavigation();
        
        return(
            <ScrollView>
            <SafeAreaView style={localStyles.container}> 
                <View style={localStyles.botoes}>
                    <TouchableOpacity>
                        <View style={localStyles.containerImagem}>
                            <Image source={require('../../../assets/meditacao.png')} /> 
                            <Text style={GlobalStyles.nomes}>Meditação</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {Linking.openURL('https://open.spotify.com/show/7qAi5cjDUt8HbKjekWBcAI?si=a6137ca102fa465a&nd=1')}}>
                        <View style={localStyles.containerImagem}>
                            <Image source={require('../../../assets/lisamcast.png')} /> 
                            <Text style={GlobalStyles.nomes}>LISAMCAST</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('músicas')}>
                        <View style={localStyles.containerImagem}>
                            <Image source={require('../../../assets/musicas.png')} /> 
                            <Text style={GlobalStyles.nomes}>Músicas</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('alimentação')}>
                        <View style={localStyles.containerImagem}>
                            <Image source={require('../../../assets/alimentacao.png')} /> 
                            <Text style={GlobalStyles.nomes}>Alimentação</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('filmes')}>
                        <View style={localStyles.containerImagem}>
                            <Image source={require('../../../assets/filmes.png')} /> 
                            <Text style={GlobalStyles.nomes}>Filmes</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('séries')}>
                        <View style={localStyles.containerImagem}>
                            <Image source={require('../../../assets/series.png')} /> 
                            <Text style={GlobalStyles.nomes}>Séries</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('canais de apoio')}>
                        <View style={localStyles.containerImagem}>
                            <Image source={require('../../../assets/canaisdeapoio.png')} /> 
                            <Text style={GlobalStyles.nomes}>Canais de Apoio</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                </SafeAreaView>
            </ScrollView>
        )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    botoes: {
        width: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    containerImagem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    }
})
