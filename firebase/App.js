import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import NovaConta from "./src/screens/NovaConta";
import RecuperacaoSenha from "./src/screens/RecuperacaoSenha";
import NovaPesquisa from "./src/screens/NovaPesquisa";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import AcoesDePesquisa from "./src/screens/AcoesDePesquisa";
import Coleta from "./src/screens/Coleta";
import RelatorioPesquisa from "./src/screens/RelatorioPesquisa";
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";
import Drawer from "./src/screens/Drawer";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const Stack = createStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#372775' } }}>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="NovaConta" component={NovaConta} />
                    <Stack.Screen name="RecuperacaoSenha" component={RecuperacaoSenha} />
                    <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
                    <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} />
                    <Stack.Screen name="AcoesDePesquisa" component={AcoesDePesquisa} />
                    <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} />
                    <Stack.Screen name="Coleta" component={Coleta} />
                    <Stack.Screen name="RelatorioPesquisa" component={RelatorioPesquisa} />
                    <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App