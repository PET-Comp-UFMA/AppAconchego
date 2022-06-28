import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native'
import GlobalColors from '../componentes/Global/GlobalColors'
import GlobalStyles from '../componentes/Global/GlobalStyles'
import Logo from '../../assets/logo.svg'
import Botao from '../componentes/Botoes/Padrao'

export default function SaibaMais(){
    return(
        <ScrollView>
        <SafeAreaView style={localStyles.container}>
            <Logo style={localStyles.logo} />
            <Text style={GlobalStyles.titulo1}>Aconchego é um aplicativo de Apoio em Saúde mental</Text>
            <Text style={GlobalStyles.titulo2}>A nossa saúde mental pode ser compreendida pelo bem-estar 
            emocional e social. Possui relação com a maneira como pensamos, sentimos 
            e agimos em nosso dia-a-dia. Também é determinada pela forma como lidamos 
            com o estresse, nos relacionamos com os outros e tomamos decisões.</Text>
            <Text style={GlobalStyles.titulo1}>Sobre Nós</Text>
            <Text style={GlobalStyles.titulo1}>Realização</Text>
            <Text style={GlobalStyles.titulo2}>Universidade Federal do Vale do Aracaú</Text>
            <Text style={GlobalStyles.titulo2}>Curso de Enfermagem</Text>
            <Image source={require('../../assets/aracau.png')}/>
            <Text style={GlobalStyles.titulo2}>Grupo de Estudo e Pesquisa Saúde Mental e Cuidado</Text>
            <Image source={require('../../assets/gesam.png')}/>
            <Text style={GlobalStyles.titulo1}>Apoio Financeiro</Text>
            <Text style={GlobalStyles.titulo2}>Fundação Cearense de Apoio ao Desenvolvimento Cientifico e Tecnológico
FUNCAP</Text>
            <Image source={require('../../assets/funcap.png')}/>
            <Text style={GlobalStyles.titulo1}>Parceiros</Text>
            <Text style={GlobalStyles.titulo2}>Universidade Federal do Ceará</Text>
            <Text style={GlobalStyles.titulo2}>Loading Desenvolvimento Jr</Text>
            <Image source={require('../../assets/univeload.png')} />
            <Text style={GlobalStyles.titulo1}>Créditos</Text>
            <Text style={GlobalStyles.titulo2}>Prof. a Dra Eliany Nazaré Oliveira</Text>
            <Text style={GlobalStyles.titulo3}>Docente do Curso de Enfermagem da Universidade Estadual do Vale do Acaraú</Text>
            <Text style={GlobalStyles.titulo2}>João Breno Cavalcante Costa</Text>
            <Text style={GlobalStyles.titulo3}>Mestrado Acadêmico em Saúde da Família, Universidade Federal do Ceará</Text>
            <Text style={GlobalStyles.titulo2}>Bolsistas do Programa de Bolsa de Produtividade em Pesquisa, Estímulo à Interiorização e à Inovação Tecnológica (BPI-FUNCAP) e discentes do Curso de Enfermagem da Universidade Estadual Vale do Acaraú (UVA)</Text>
            <Text style={GlobalStyles.titulo3}>Caio San Rodrigues</Text>
            <Text style={GlobalStyles.titulo3}>Letícia Mara Cavalcante Lima</Text>
            <Text style={GlobalStyles.titulo3}>Lídia Cristina Monteiro da Silva</Text>
            <Text style={GlobalStyles.titulo3}>Ravena Silva do Nascimento</Text>
            <Text style={GlobalStyles.titulo3}>Flávia Regino Oliveira</Text>
            <Text style={GlobalStyles.titulo3}>Ana Beatryz dos Santos Costa</Text>
            <Text style={GlobalStyles.titulo3}>Emilia do Nascimento Silva</Text>
            <Text style={GlobalStyles.titulo2}>Discente do Curso de Enfermagem da Universidade Estadual do Vale do Acaraú (UVA)</Text>
            <Text style={GlobalStyles.titulo3}>Alexia Gomes Souza</Text>
            <Text style={GlobalStyles.titulo3}>Ravena Petra Mororó Ziesemer</Text>
            <Text style={GlobalStyles.titulo2}>Discente do Curso de Engenharia da Computação da Universidade Ferderal do Ceará (UFC)</Text>
            <Text style={GlobalStyles.titulo3}>Ana Lara Carvalho Mesquita</Text>
            <Text style={GlobalStyles.titulo3}>Joyce Ávila Ximenes</Text>
            <Botao title='Voltar à Tela Principal'/>
        </SafeAreaView>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: GlobalColors.CorFundo,
    },
    logo: {
        marginBottom: 30,
        marginTop: 35,
        padding: 10
    }
})

export { SaibaMais }