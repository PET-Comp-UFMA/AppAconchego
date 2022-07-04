import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    SafeAreaView,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

export default class BotaoMidia extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoMusica} onPress = {this.props.onPress}>
                    <View style={localStyles.containerImagemMusica}>
                        <Feather name="play" size={25} color={'#FFF'}/>
                    </View>

                    <View style={localStyles.containerTexto}>
                        <Text numberOfLines={1} style={GlobalStyles.textoOpcoes}>    
                            {this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    containerImagemMusica: {
        backgroundColor: '#009DA1',
        width: 50,
        height: 48,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#101012',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        marginLeft: -1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        top: 1
    },
    containerTexto: {
        flex: 1,
    }
});