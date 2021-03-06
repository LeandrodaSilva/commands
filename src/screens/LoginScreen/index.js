import * as React from "react";
import {Text, View} from "../../components/Themed";
import { TextInput, Button, KeyboardAvoidingView, ActivityIndicator, Alert } from "react-native";
import FormRow from "../../components/FormRow";
import styles from "./styles";
import firebase from 'firebase';
import {useDispatch} from "react-redux";
import {authActions} from "../../store/authSlice";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const dispatch = useDispatch();

  async function doLogin() {
    setIsLoading(true);

    try {
      const resp = await firebase.auth()
      .signInWithEmailAndPassword(email, senha);

      if (resp.user.uid) {
        dispatch(authActions.setAuthenticated(true));
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert(
          "Usuário não encontrado",
          "Deseja criar um novo usuário?",
          [
            {
              text: "Não",
              onPress: () => {}
            },
            {
              text: "Sim",
              onPress: registerUser
            }
          ]
        );
      }
      setMessage( error.code ? getMessageByErrorCode(error.code) : error)
    }

    setIsLoading(false);
  }

  async function registerUser() {
    try {
      const { user } = await firebase.auth()
      .createUserWithEmailAndPassword(email, senha);

      if (user.uid) {
        console.log(user.uid)
        dispatch(authActions.setAuthenticated(true));
      }
    } catch (error) {
      setMessage( error.code ? getMessageByErrorCode(error.code) : error)
    }
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
