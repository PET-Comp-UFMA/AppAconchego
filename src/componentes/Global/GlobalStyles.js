import { StyleSheet } from "react-native";
import GlobalColors from "./GlobalColors";

export default StyleSheet.create({
    butao:{
        fontFamily: 'IBMPlexSans_Bold',
        height: 56,
        width: '75%',
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalColors.CorAcao
    },
    titulo: {
        color: GlobalColors.CorFundo,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 1,
        fontFamily: 'IBMPlexSans_Bold'
    }
});