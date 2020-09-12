import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 5,
  },

  name: {
    borderRadius: 12,
    padding: 6,
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    marginVertical: 10,
    width: '100%',
    height: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },

  button: {
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  }
})
