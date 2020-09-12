import React from "react";
import {View} from "./Themed";
import { StyleSheet } from 'react-native';

export default function FormRow({children}) {
  return (
    <View style={ styles.form }>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  form: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
})
