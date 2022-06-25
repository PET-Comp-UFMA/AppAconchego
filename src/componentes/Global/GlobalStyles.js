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
    butaoTeste:{
        fontFamily: 'IBMPlexSans_Bold',
        height: 54,
        width: '90%',
        marginVertical: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: GlobalColors.CorFundoCard,
        flexDirection: 'row'
    },
    butaoAvaliacao:{
        fontFamily: 'IBMPlexSans_Bold',
        height: 90,
        width: '90%',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: GlobalColors.CorFundoCard,
        flexDirection: 'row'
    },
    titulo1: {
        color: GlobalColors.CorTextoForte,
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Bold',
        lineHeight: 28
    },
    titulo2: {
        color: GlobalColors.CorTextoForte,
        fontSize: 21,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Medium',
        lineHeight: 24
    },
    textoBotao: {
        color: GlobalColors.CorFundo,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 1,
        fontFamily: 'IBMPlexSans_Bold'
    },
    textoOpcoes: {
        color: GlobalColors.CorTextoForte,
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Regular',
        maxWidth: '80%',
        textAlign: 'left'
    },
    numero: {
        color: GlobalColors.CorFundo,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Medium',
    }
});