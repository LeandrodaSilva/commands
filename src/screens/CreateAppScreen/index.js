import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, TextInput} from 'react-native';
import {Text, View} from '../../components/Themed';
import styles from './styles';
import salvarIcon from "../../assets/images/save.png";

export default function CreateAppScreen() {
  const [name, onChangeName] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  const [command, onChangeCommand] = React.useState('');
  const navigation = useNavigation();


  function navigateToHome() {
    navigation.navigate('HomeScreen');
  }

  return (
    <View style={ styles.container }>

      <View style={ styles.form }>
        <Text>Ícone:</Text>
        <TextInput
          style={ styles.icone }
          onChangeText={text => onChangeDescription(text)}
          value={description}
        />

        <Text>Nome:</Text>
        <TextInput
          style={ styles.name }
          onChangeText={text => onChangeName(text)}
          value={name}
        />
      </View>

      <View style={styles.menuBottom}>
        <View style={styles.menuBottomItem}>
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.menuBottomItemIcon} source={salvarIcon}/>
            <Text style={styles.menuBottomItemText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

