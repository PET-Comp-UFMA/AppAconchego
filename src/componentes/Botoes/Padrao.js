import React, { Component } from 'react'
import { 
    SafeAreaView,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

export default class BotaoPadrao extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.botao} onPress = {this.props.onPress}>
                    <Text style={styles.titulo}> 
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },

    botao: {
        height: 56,
        width: '75%',
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#101012',
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009DA1'
    }, 

    titulo: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 1,
        fontFamily: 'IBMPlexSans_Bold'
    }
})