import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import {Text, View} from '../../components/Themed';

import api from '../../services/api';
import styles from './styles';

import adicionarIcon from '../../assets/images/adicionar.png';
import AppList from "../../components/AppList";
import LoadingIndicator from "../../components/LoadingIndicator";

export default function HomeScreen(props) {
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  function navigateToAdd() {
    navigation.navigate('CreateAppScreen');
  }

  function loadApps() {
    if (isLoading) return;

    setIsLoading(true);

    api.get('app')
    .then(response => setApps(response.data))
    .then(() => setIsLoading(false))
    .catch(() => props.navigation.replace('NotFound'))
  }

  useEffect(() => {
    loadApps()
  }, [])

  return (
    <View style={styles.container}>
      { isLoading ? <LoadingIndicator /> : <AppList apps={apps}/> }
      {
        !isLoading ?
          <View style={styles.menuBottom}>
            <View style={styles.menuBottomItem}>
              <TouchableOpacity onPress={() => navigateToAdd()}>
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

