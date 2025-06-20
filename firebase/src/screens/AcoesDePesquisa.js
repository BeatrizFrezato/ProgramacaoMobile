import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

const AcoesDePesquisa = (props) => {
    const goToModificar = () => {
        props.navigation.navigate("ModificarPesquisa")
    }

    const goToDados = () => {
        props.navigation.navigate("Coleta")
    }

    const goToRelatorio = () => {
        props.navigation.navigate("RelatorioPesquisa")
    }

    return (
        <View style = {estilo.viewPrincipal}>
            <TouchableOpacity style={estilo.button} onPress={goToModificar}>
                <Icon name="edit-document" size={60} color="#FFFFFF" />
                <Text style={estilo.textButton}>Modificar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.button} onPress={goToDados}>
                <Icon2 name="checkbox-multiple-marked-outline" size={60} color="#FFFFFF" />
                <Text style={estilo.textButton}>Coletar Dados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.button} onPress={goToRelatorio}>
                <Icon3 name="circular-graph" size={60} color="#FFFFFF" />
                <Text style={estilo.textButton}>Relatório</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilo = StyleSheet.create ({
    button: {
        backgroundColor: "#312464",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        height: 170,
        width: 170
    },
    textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 25,
        paddingTop: 15
    },
    viewPrincipal: {
        flex: 1,
        backgroundColor: "#372775",      
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
})

export default AcoesDePesquisa