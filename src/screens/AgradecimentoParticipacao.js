import { StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

const AgradecimentoParticipacao = () => {
    const navigation = useNavigation();

    useEffect(() => {
        
        const timer = setTimeout(() => {
            navigation.goBack(); 
        }, 3000);

        
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={estilo.viewPrincipal}>
            <Text style={estilo.texto}>Obrigado por participar da pesquisa!</Text>
            <Text style={estilo.texto}>Aguardamos você no próximo ano!</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    texto: {
        color: "white",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 35,
        marginBlockEnd: 40
    },
    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",
        flexDirection: 'colum',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default AgradecimentoParticipacao