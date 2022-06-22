import React,{ Component } from "react";
import { Text } from "react-native";


export default class Bold extends Component {  
    render(){
        return(
            <Text style={{fontFamily: 'Mulish_Bold', fontWeight: '500'}}>{this.props.children}</Text>
        );
    }
};