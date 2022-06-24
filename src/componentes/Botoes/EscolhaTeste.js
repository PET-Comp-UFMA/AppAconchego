import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import GlobalColors from '../Global/GlobalColors';

import { 
    SafeAreaView,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    View
} from 'react-native'

export default class BotaoEscolhaTeste extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoTeste} onPress = {this.props.onPress}>
                    <View style={localStyles.circulo}>
                        <Text style={GlobalStyles.numero}>{this.props.number}</Text>
                    </View>

                    <Text style={GlobalStyles.testoTeste}>    
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const localStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    circulo: {
        height: 49,
        width: 49,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        backgroundColor: GlobalColors.CorAcao,
        marginLeft: -1,
        marginRight: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
});