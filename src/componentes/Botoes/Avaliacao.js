import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    SafeAreaView,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions,
    Image,
    View
} from 'react-native'

export default class BotaoPadrao extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoAvaliacao} onPress = {this.props.onPress}>
                    <View style={localStyles.containerImagemAvaliacao}>
                        <Image style={localStyles.imagemAvaliacao} source={require('../../../assets/Vector.png')} />
                    </View>

                    <View>
                        <Text style={GlobalStyles.testoTeste}>    
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
    containerImagemAvaliacao: {
        backgroundColor: '#009DA1',
        width: 84,
        height: 86,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#101012',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        marginLeft: -1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    imagemAvaliacao: {
        width: 51,
        height: 57,
    }
});