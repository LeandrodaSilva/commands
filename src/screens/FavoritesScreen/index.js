import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import api from '../../services/api';
import styles from './styles';
import CommandList from "../../components/CommandList";
import LoadingIndicator from "../../components/LoadingIndicator";

export default function FavoritesScreen() {
  const [commands, setCommands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('HomeScreen');
  }

  async function disfavor(item) {
    const response = await api.put( `command/${item.id}` , {...item, ...{favorite: false}});
  }

  async function loadFavorites() {
    if (isLoading) return;

    setIsLoading(true);

    api.get('command', {params: {favorite: true}})
    .then((response) => setCommands(response.data))
    .then(() => setIsLoading(false))
    .catch(() => navigateToHome())
  }

  useEffect(() => {loadFavorites()}, []);

  return (
    <View style={ styles.container }>
      {
        isLoading ? <LoadingIndicator/> : <CommandList data={commands} onRemove={disfavor}/>
      }
    </View>
  )
}

