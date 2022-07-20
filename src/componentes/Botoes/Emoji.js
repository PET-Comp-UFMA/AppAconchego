import React from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import GlobalColors from '../Global/GlobalColors';
import { 
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'

export default function BotaoEmoji (props) {
        // Troca da imagem do emoji
        var emoji = require('../../../assets/happy.png');

        if (props.emoji == "normal") {
            emoji = require('../../../assets/normall.png');
        } else if (props.emoji == "triste") {
            emoji = require('../../../assets/sad.png');
        }
        
        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity
                    style={[GlobalStyles.butaoEmoji, {backgroundColor: props.color}]}
                    onPress = {props.onPress}>
                    <Image style={localStyles.emoji} source={emoji}/>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

const localStyles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {    
        width: 60,
        height: 60
    }
});