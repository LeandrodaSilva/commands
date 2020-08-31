import * as React from "react";
import {FlatList, StyleSheet} from "react-native";
import {View} from './Themed';
import Command from "./Command";
import {useNavigation} from "@react-navigation/native";

export default function CommandList({ data, loadMore, onRemove }) {
  const navigation = useNavigation();

  function navigateToDetails(command) {
    navigation.navigate('DetailsScreen', { command });
  }

  return (
    <View style={styles.appContainer}>
      <FlatList
        style={styles.appList}
        data={data}
        keyExtractor={command => String(command.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        renderItem={({ item: command }) => (

          <View style={styles.appRow}>
            <Command item={command}
                     navigateTo={() => navigateToDetails(command)}
                     onPressRemove={onRemove}
                     onChange={loadMore}/>
          </View>

        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  appList: {
    width: '100%',
    borderRadius: 8,
  },

  appRow: {
    width: '100%',
  },
})
