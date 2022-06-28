import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

export default class BotaoEmoji
 extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoEmoji} onPress = {this.props.onPress}>
                    <Image style={localStyles.emoji} source={require('../../../assets/feliz.png')} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const localStyles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        width: 39,
        height: 39
    }
});