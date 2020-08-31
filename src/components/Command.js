import React from 'react';
import {Clipboard, Image, StyleSheet, TouchableOpacity, Alert} from "react-native";
import {View, Text} from './Themed';

import copyIcon from "../assets/images/btn-copy.png";
import removeIcon from "../assets/images/btn-remove.png";

export default function Command({item, onChange, onPressRemove, navigateTo}) {
  function copyToClipboard(command) {
    Clipboard.setString(command);
  }

  async function removeAction(item) {
    Alert.alert(
      "Remover dos Favoritos",
      `Você está prestes a remover "${item.name}", certo?`,
      [
        {
          text: "NÃO",
          style: "cancel"
        },
        {
          text: "SIM",
          onPress: () => {
            if (onPressRemove) onPressRemove(item);
            if (onChange) onChange();
          }
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <TouchableOpacity onPress={() => navigateTo()}>
      <View style={styles.app}>
        <View style={styles.appText}>
          <Text style={styles.appName}>{item.name}</Text>
        </View>

        <TouchableOpacity style={styles.appCopy} onPress={() => copyToClipboard(item.command)}>
          <Image style={styles.menuBottomItemIcon} source={copyIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.appRemove} onPress={() => removeAction(item)}>
          <Image style={styles.menuBottomItemIcon} source={removeIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  app: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  appName: {
    marginTop: 5,
    fontSize: 15,
  },

  appText: {
    flex: 4,
    marginLeft: 4,
    backgroundColor: 'transparent',
  },

  appCopy: {
    flex: 1,
  },

  appRemove: {
    flex:1,
  },
})
