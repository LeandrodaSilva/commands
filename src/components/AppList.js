import * as React from "react";
import {FlatList, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {View} from "./Themed";
import App from "./App";
import {useState} from "react";
import Layout from "../constants/Layout";
import {useNavigation} from "@react-navigation/native";
import api from "../services/api";

export default function AppList({apps, loadMore}) {
  const [numColumns, setNumColumns] = useState(parseInt(Layout.window.width / 100));
  const navigation = useNavigation();

  function navigateToCommands(app) {
    navigation.navigate('CommandsScreen', {app});
  }

  function askToRemove(app) {
    async function remove() {
      await api.delete(`app/${app.id}`);
    }

    Alert.alert(
      "Remover app",
      `Você está prestes a remover "${app.name}", certo?`,
      [
        {
          text: "NÃO",
          style: "cancel"
        },
        {
          text: "SIM",
          onPress: () => remove()
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.appContainer}>
      <FlatList
        data={apps}
        keyExtractor={app => String(app.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        numColumns={numColumns}
        renderItem={({item: app}) => (

          <View style={styles.appRow}>
            <TouchableOpacity
              onPress={() => navigateToCommands(app)}
              onLongPress={() => askToRemove(app)}
            >
              <App app={app} onChange={loadMore} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}


const styles =  StyleSheet.create({
  appContainer: {
    flex: 4,
    width: '100%',
    paddingHorizontal: 23,
  },

  appRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

