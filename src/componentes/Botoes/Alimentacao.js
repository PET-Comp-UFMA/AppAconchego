import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import GlobalColors from '../Global/GlobalColors';

import { 
    SafeAreaView,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

export default class BotaoAlimentacao extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoAlimentacao} onPress = {this.props.onPress}>
                    <View style={localStyles.containerImagemMusica}>
                        <Feather name="youtube" size={45} color={'#FFF'}/>
                    </View>

                    <View style={localStyles.containerTexto}>
                        <Text style={GlobalStyles.textoOpcoes}>    
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
        backgroundColor: GlobalColors.CorAcao,
        width: 80,
        height: 88,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: GlobalColors.CorTextoForte,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 3,
        marginLeft: -1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        top: 1
    },
    containerTexto: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
});