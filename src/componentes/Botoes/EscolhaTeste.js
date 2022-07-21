import React from 'react'
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

export default function BotaoEscolhaTeste(props){

        return(
            <SafeAreaView style={localStyles.container}>
                <TouchableOpacity style={GlobalStyles.butaoTeste} onPress = {props.onPress}>
                    <View style={[GlobalStyles.circulo, {backgroundColor: props.color}]}>
                        <Text style={GlobalStyles.numero}>{props.number}</Text>
                    </View>

                    <Text style={GlobalStyles.textoOpcoes}>    
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }


const localStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    }
})