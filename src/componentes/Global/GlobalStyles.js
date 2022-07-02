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
        width: '85%',
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
    butaoEmoji:{
        fontFamily: 'IBMPlexSans_Bold',
        height: 68,
        width: 66,
        marginVertical: 10,
        borderRadius: 33,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalColors.CorAcao,
        flexDirection: 'row'
    },
    titulo1: {
        color: GlobalColors.CorTextoForte,
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Bold',
        lineHeight: 28,
        maxWidth: 330,
        padding: 5
    },
    titulo2: {
        color: GlobalColors.CorTextoForte,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Medium',
        lineHeight: 24,
        padding: 3,
        maxWidth: 330
    },
    descricao:{
        color: GlobalColors.CorTextoForte,
        fontSize: 20,
        fontFamily: 'IBMPlexSans_Medium',
        justifyContent: 'center',
        textAlign: 'justify',
        padding: 1,
        maxWidth: 330
    },
    nomes:{
        color: GlobalColors.CorTextoForte,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Medium',
        lineHeight: 24,
        maxWidth: 340
    },
    textoBotao: {
        color: GlobalColors.CorFundoCard,
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
        fontFamily: 'IBMPlexSans_Regular',
        maxWidth: '80%',
        textAlign: 'left'
    },
    textoTabBottom: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Medium',
    },
    numero: {
        color: GlobalColors.CorFundo,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Medium',
    },
    header: {
        color: GlobalColors.CorTextoForte,
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'IBMPlexSans_Bold',
        maxWidth: 320,
        textTransform: 'uppercase',
        letterSpacing: 3,
    },
    botaopeqprox: {
        fontFamily: 'IBMPlexSans_Bold',
        height: 56,
        width: '25%',
        margin: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalColors.CorAcao,
    },
    botaopeqvoltar: {
        fontFamily: 'IBMPlexSans_Bold',
        height: 56,
        width: '25%',
        margin: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        borderBottomWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    textoBotaoPeq:{
        color: GlobalColors.CorTextoForte,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: 1,
        fontFamily: 'IBMPlexSans_Bold'
    },
    containerBotao:{
        alignItems: 'center', 
        flexDirection: 'row',
    },
    circulo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: GlobalColors.CorTextoForte,
        backgroundColor: GlobalColors.CorAcao,
        marginLeft: -1,
        marginRight: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botoesTeste: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});