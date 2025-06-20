import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer = (props) => {
    const texto = props.texto
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text style={estilo.emailText}>{texto}</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem style={estilo.closeButton} labelStyle={estilo.label} label="Sair"
                onPress={() => { props.navigation.popToTop() }}
                icon={() => (
                    <Icon name="logout" size={25} color='white' />
                )}
            />
        </DrawerContentScrollView>
    );
}

const estilo = StyleSheet.create({
    emailText: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center',
        borderBottomWidth: 2.5,
        borderBottomColor: 'white',
        fontFamily: 'AveriaLibre-Regular',
    },
    closeButton: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        marginTop: 210,
    },

    label: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
    }
});

export default CustomDrawer