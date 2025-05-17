import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {PaperProvider, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const navigation = useNavigation();

  function validarEmail(em) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.trim());
  }

  async function entrar() {
    setMensagemErro('');
    if (!validarEmail(email)) {
      setMensagemErro('Digite um email válido.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);
      navigation.replace('Home');
    } catch (err) {
      setMensagemErro('Email e/ou senha inválidos.');
      console.error('Erro no Firebase:', err);
    }
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Satisfying.you</Text>

        {mensagemErro !== '' && (
          <Text style={styles.errorText}>{mensagemErro}</Text>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.email}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={texto => {
              setEmail(texto);
              setMensagemErro('');
            }}
          />

          <Text style={styles.email}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            autoCapitalize="none"
            value={senha}
            onChangeText={texto => {
              setSenha(texto);
              setMensagemErro('');
            }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
          <Text style={styles.linkText}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    padding: 20,
  },
  container_layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  layout: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 38,
    fontWeight: '400',
    lineHeight: 76.38,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  container_icon: {
    backgroundColor: '#372775',
    padding: 6.25,
    marginLeft: 10,
  },
  inputContainer: {
    width: '75%',
    marginBottom: 15,
  },
  email: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    marginBottom: 15,
  },
  outroButton1: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    fontWeight: '400',
    paddingVertical: 4,
    borderWidth: 1,
    backgroundColor: '#419ED7',
    width: '75%',
    alignItems: 'center',
    marginBottom: 15,
  },
  outroButton2: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    fontWeight: '400',
    paddingVertical: 4,
    borderWidth: 1,
    backgroundColor: '#B0CCDE',
    width: '75%',
    alignItems: 'center',
    marginBottom: 25,
  },
  button: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
    fontWeight: '400',
    paddingVertical: 10,
    borderWidth: 1,
    backgroundColor: '#37BD6D',
    width: '75%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 55,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 36,
  },
  linkText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  errorText: {
    color: '#FD7979',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 10,
  },
});

export default Login;
