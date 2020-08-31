import React from 'react';
import {Image, StyleSheet} from "react-native";
import {View, Text} from './Themed';

export default function App({ app }) {
  return (
    <>
      <View style={styles.app}>
        <View style={styles.appIcon}>
          <Image style={styles.appIconImage} source={{uri: app.icon}}/>
        </View>
        <Text style={styles.appName}>{app.name}</Text>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  app: {
    width: 70,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },

  appName: {
    marginTop: 5,
    fontSize: 15,
  },

  appIcon: {
    borderRadius: 12,
    padding: 6,
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  appIconImage: {
    width: 60,
    height: 60,
  },
})
