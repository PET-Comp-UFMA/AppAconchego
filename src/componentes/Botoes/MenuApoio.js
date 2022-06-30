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
    View
} from 'react-native'

export default class MenuApoio extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView>
            <SafeAreaView style={localStyles.container}> 
                <View style={localStyles.botoes}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={localStyles.containerImagem}>
                        <Image source={require('../../../assets/meditacao.png')} /> 
                        <Text style={GlobalStyles.nomes}>Meditação</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={localStyles.containerImagem}>
                        <Image source={require('../../../assets/lisamcast.png')} /> 
                        <Text style={GlobalStyles.nomes}>LISAMCAST</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={localStyles.containerImagem}>
                        <Image source={require('../../../assets/musicas.png')} /> 
                        <Text style={GlobalStyles.nomes}>Músicas</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={localStyles.containerImagem}>
                        <Image source={require('../../../assets/alimentacao.png')} /> 
                        <Text style={GlobalStyles.nomes}>Alimentação</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={localStyles.containerImagem}>
                        <Image source={require('../../../assets/filmes.png')} /> 
                        <Text style={GlobalStyles.nomes}>Filmes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={localStyles.containerImagem}>
                        <Image source={require('../../../assets/series.png')} /> 
                        <Text style={GlobalStyles.nomes}>Séries</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onPress}>
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
}

const localStyles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    botoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        widht: '80%',
        justifyContent: 'space-between',
    },
    containerImagem: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    }
})
