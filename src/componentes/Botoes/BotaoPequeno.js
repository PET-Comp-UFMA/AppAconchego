import React, { Component } from 'react';
import GlobalStyles from '../Global/GlobalStyles';
import { 
    SafeAreaView,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

export default class BotaoPequeno extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.proximo){
            return(
                <TouchableOpacity style={GlobalStyles.botaopeqprox} onPress = {this.props.onPress}>
                    <Text style={GlobalStyles.textoBotao}>    
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            )
        }else if(this.props.voltar){
            return(
            <TouchableOpacity style={GlobalStyles.botaopeqvoltar} onPress = {this.props.onPress}>
                <Text style={GlobalStyles.textoBotaoPeq}>    
                    {this.props.title}
                </Text>
            </TouchableOpacity>)
        }
        
    }
}