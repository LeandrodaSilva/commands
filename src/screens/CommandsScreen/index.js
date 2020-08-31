import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from '../../components/Themed';
import api from '../../services/api';
import styles from './styles';
import CommandList from "../../components/CommandList";
import LoadingIndicator from "../../components/LoadingIndicator";
import {Image, TouchableOpacity} from "react-native";
import adicionarIcon from "../../assets/images/adicionar.png";

export default function CommandsScreen() {
  const [commands, setCommands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const app = route.params.app;
  const navigation = useNavigation();

  function navigateToCreate() {
    navigation.navigate("CreateCommandScreen");
  }


  async function loadCommands() {
    if (isLoading) return;

    setIsLoading(true);
    api.get('command', {params: {"id_app": app.id}})
    .then((response) => setCommands(response.data))
    .then(() => setIsLoading(false))
    .catch(() => props.navigation.replace('NotFound'))
  }

  useEffect(() => {
    loadCommands()
  }, []);

  return (
    <View style={ styles.container }>
      {
        isLoading ? <LoadingIndicator /> : <CommandList data={commands} onRemove={() => {}}/>
      }
      {
        !isLoading ?
          <View style={styles.menuBottom}>
            <View style={styles.menuBottomItem}>
              <TouchableOpacity onPress={() => navigateToCreate()}>
                <Image style={styles.menuBottomItemIcon} source={adicionarIcon}/>
                <Text style={styles.menuBottomItemText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
          : null
      }
    </View>
  )
}

