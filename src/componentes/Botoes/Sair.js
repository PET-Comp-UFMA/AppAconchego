import React, { Component } from 'react'
import { Image, TouchableOpacity, StyleSheet, SafeAreaView, Text } from 'react-native'

export default class BotaoSair extends Component{
    constructor(props){
    super(props)
    }

    render(){
        return(
            <SafeAreaView>
                <TouchableOpacity style={localStyles.container} onPress={this.props.onPress}>
                    <Image style={localStyles.imagem} source={require('../../../assets/sair.png')} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const localStyles = StyleSheet.create({
    imagem: {
        width: 30,
        height: 30
    },
    container:{
        flexDirection: 'row', 
        alignContent: 'flex-start',
    },
    texto:{
        fontSize: 25
    }
})

