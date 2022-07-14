import React, { Component } from 'react'
import GlobalStyles from '../Global/GlobalStyles';
import { 
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

export default class HeaderTitle extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SafeAreaView style={localStyles.container}>
                <Text style = {GlobalStyles.titulo1}>
                    {this.props.title}
                </Text>
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
    }
});