import { useState } from 'react';
import { Button, StyleSheet,Text, TextInput, View } from 'react-native';

export default function App() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const onPressFunction = () => {
    console.warn(email, password)
  }
  return (
    <View style={styles.container}> 
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Área de Login</Text>
        </View>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            keyboardType="email-address"
            placeholder="email@email.com"
          />
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="**********"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.button}>
          <Button
          title="Enviar"
          onPress={_ => onPressFunction()}
          color= '#f1f1f1'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    marginTop: 55,
    marginBottom: 35,
  },
  label: {
    paddingLeft: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 400,
    width: 300,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#dc143c',
    height: 40,
    borderRadius: 20,
    width: 200,
    margin: 15,
  },
});
