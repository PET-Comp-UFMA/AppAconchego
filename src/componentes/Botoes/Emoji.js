import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'

export default class BotaoEmoji
 extends Component {
    constructor(props){
        super(props);
    }

    render(){
        // Troca da imagem do emoji
        var emoji = require('../../../assets/feliz.png');

        if (this.props.emoji == "normal") {
            emoji = require('../../../assets/normal.png');
        } else if (this.props.emoji == "triste") {
            emoji = require('../../../assets/triste.png');
        }
        
        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoEmoji} onPress = {this.props.onPress}>
                    <Image style={localStyles.emoji} source={emoji}/>
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