import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
//import { styles } from './styles';
import MessageComponent from '../../components/MessageComponent';
import { useAuth } from '../../context/AuthContext';

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState<{
    message: string;
    isSuccess: boolean;
  } | null>(null);

  // Hook para acessar e atualizar o contexto de autenticação
  const { setUser } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://localhost:7259/api/v1/authentication/sign-in',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro no servidor: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.isSuccess) {
        setApiResponse({ message: data.message, isSuccess: true });

        setUser({
          fullName: data.fullName,
          userId: data.userId,
        });

        Alert.alert('Login bem-sucedido!', `Bem-vindo, ${data.fullName}`);
        navigation.replace('Home'); // Redireciona para a tela "Home"
      } else {
        setApiResponse({ message: data.message, isSuccess: false });
        Alert.alert('Erro no login', data.message || 'Falha ao autenticar. Verifique as credenciais.');
      }
    } catch (error) {
      setApiResponse({ message: 'Erro ao conectar com o servidor.', isSuccess: false });
      Alert.alert('Erro', 'Não foi possível conectar ao servidor. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {apiResponse && (
        <MessageComponent
          message={apiResponse.message}
          success={apiResponse.isSuccess}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
  },
  successBox: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    borderWidth: 1,
  },
  errorBox: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
  },
  messageText: {
    color: '#155724',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;
