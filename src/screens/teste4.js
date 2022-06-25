import React from "react";
import {
    SafeAreaView,
    View,
    StyleSheet
} from 'react-native'

import RotasBottom from "../rotas";

export default function Teste1() {
    return(
            <RotasBottom />
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});