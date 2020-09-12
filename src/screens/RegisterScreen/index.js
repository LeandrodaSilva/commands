import * as React from "react";
import {Text, View} from "../../components/Themed";
import { TextInput, Button, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import FormRow from "../../components/FormRow";
import styles from "./styles";
import firebase from 'firebase';

export default function RegisterScreen() {
  const [email, setEmail] = React.useState("ld_silva13@hotmail.com");
  const [senha, setSenha] = React.useState("admin123");
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  function doLogin() {
    setIsLoading(true);
    firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(r => {
      setMessage("Login realizado com sucesso!!");
      console.log('Logou: '+ r.user.email);
    })
    .catch(error => setMessage(getMessageByErrorCode(error.code)))
    .finally(() => setIsLoading(false));
  }

  function renderMessage() {
    return (
      <View>
        {
          message ? <Text>{message}</Text> : null
        }
      </View>
    )
  }

  function getMessageByErrorCode(code) {
    switch (code) {
      case 'auth/user-not-found':
        return 'Email inexistente.'
      case 'auth/wrong-password':
        return 'Senha inválida.'
      default:
        return 'Erro desconhecido.'
    }
  }

  function renderButton() {
    if (isLoading) return <ActivityIndicator />

    return (
      <Button style={ styles.button }
              title="Entrar"
              onPress={doLogin}
      />
    )
  }

  React.useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyAdtqiOfZJE0hFTH6BR0iblJI036tF874Q",
      authDomain: "commands-app.firebaseapp.com",
      databaseURL: "https://commands-app.firebaseio.com",
      projectId: "commands-app",
      storageBucket: "commands-app.appspot.com",
      messagingSenderId: "970803364295",
      appId: "1:970803364295:web:d6fdbcc7db9055d51599e2",
      measurementId: "G-LQEVDJ117P"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
   }, [])

  return (
    <KeyboardAvoidingView style={ styles.container } behavior="padding">
      <FormRow>
        <Text>E-Mail:</Text>
        <TextInput
          placeholder="example@email.com"
          style={ styles.name }
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <Text>Senha:</Text>
        <TextInput
          placeholder="Insira sua senha"
          secureTextEntry
          style={ styles.name }
          onChangeText={text => setSenha(text)}
          value={senha}
        />
        {renderMessage()}
        {renderButton()}
      </FormRow>
    </KeyboardAvoidingView>
  )
}
