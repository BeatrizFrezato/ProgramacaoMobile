/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from "./src/screens/Login";
import NovaConta from "./src/screens/NovaConta";
import RecuperacaoSenha from "./src/screens/RecuperacaoSenha";
import Drawer from './src/screens/Drawer';
import Home from "./src/screens/Home";
import NovaPesquisa from './src/screens/NovaPesquisa';
import AcoesDePesquisa from './src/screens/AcoesDePesquisa';
import RelatorioPesquisa from './src/screens/RelatorioPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
