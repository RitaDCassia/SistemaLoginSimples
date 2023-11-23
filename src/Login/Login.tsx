import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

export const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [showCupom, setShowCupom] = useState(false);

  const handleVerifyLogin = async () => {
    setStatus('');
    setShowCupom(false);

    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'content-type': 'application/json'
      },
    });

    const json = await req.json();

    if (json.status == 'ok') {
      setStatus('acesso liberado!');
      setShowCupom(true);
    } else {
      setStatus('acesso negado!');
      setShowCupom(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.styleBall}>
        <Text style={styles.ball}></Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTextLogin}>Login</Text>
        <Text style={styles.headerTextDescription}>Faça login e continue</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe seu email"
          value={email}
          onChangeText={t => setemail(t)}
          placeholderTextColor="#ccc"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Senha </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe sua senha"
          value={password}
          onChangeText={t => setPassword(t)}
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.btnBackground}>
        <TouchableOpacity onPress={handleVerifyLogin}>
          <Text style={styles.btnSend}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.status}>{status}</Text>

      {showCupom && (
        <View style={styles.boxLogin}>
          <Text style={styles.textLogin}>Entrou</Text>
          <Text style={styles.textLogin}>Lógica para ir pra o app</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
