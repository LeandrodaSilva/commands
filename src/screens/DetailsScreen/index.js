import React from 'react';
import {Text, View} from '../../components/Themed';
import styles from './styles';
import {useRoute} from "@react-navigation/core";
import {Image, TouchableOpacity} from "react-native";
import favoritarIcon from "../../assets/images/favoritar.png";

export default function DetailsScreen() {
  const route = useRoute();
  const command = route.params.command;

  return (
    <View style={ styles.container }>

      <Text>Nome:</Text>
      <View style={ styles.name }>
        <Text>{command.name}</Text>
      </View>

      <Text>Descrição:</Text>
      <View style={ styles.description }>
        <Text>{command.description}</Text>
      </View>

      <Text>Comando:</Text>
      <View style={ styles.command }>
        <Text>{command.command}</Text>
      </View>

      <View style={styles.menuBottom}>
        <View style={styles.menuBottomItem}>
          <TouchableOpacity onPress={() => {}}>
            <Image style={styles.menuBottomItemIcon} source={favoritarIcon}/>
            <Text style={styles.menuBottomItemText}>Favoritar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

