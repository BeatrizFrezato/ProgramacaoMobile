import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home"
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from "../components/CustomDrawer";


const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    const route = useRoute();
    const email = route.params?.email;

    return (
        <DrawerNavigator.Navigator
            screenOptions={{
                drawerActiveTintColor: '#372775',
                drawerLabelStyle: { color: 'white', fontSize: 22 },
                drawerStyle: { backgroundColor: '#372775' },
                headerStyle: { backgroundColor: '#372775' },
                headerTintColor: 'white',
            }}
            drawerContent={(props) => <CustomDrawer {...props} texto={email}/>}>
            <DrawerNavigator.Screen name='Home' component={Home}
                options={{
                    drawerIcon: () => (
                        <Icon name="description" size={30} color='white' />
                    ),
                }} />
        </DrawerNavigator.Navigator>
    )
}
export default Drawer