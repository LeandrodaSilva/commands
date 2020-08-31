import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from "./styles";

export default function NotFoundScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Essa tela não existe.</Text>
      <TouchableOpacity onPress={() => props.navigation.replace('Login')} style={styles.link}>
        <Text style={styles.linkText}>Vá para a tela de login</Text>
      </TouchableOpacity>
    </View>
  );
}
