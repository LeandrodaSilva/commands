import { StyleSheet } from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
  },

  form: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
  },

  name: {
    flex: 1,
    borderRadius: 12,
    padding: 6,
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    marginVertical: 5,
    width: '100%',
  },

  description: {
    flex: 3,
    borderRadius: 12,
    padding: 6,
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    marginVertical: 5,
    width: '100%',
  },

  command: {
    flex: 2,
    borderRadius: 12,
    padding: 6,
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    marginVertical: 5,
    width: '100%',
  },

  menuBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 4,
  },

  menuBottomItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 10,
    width: 70,
    paddingVertical: 10,
  },

  menuBottomItemText: {
    marginTop: 5,
    fontSize: 15,
    alignSelf: 'center',
  },

  menuBottomItemIcon: {
    borderRadius: 12,
    padding: 6,
    backgroundColor: 'rgba(62, 60, 60, 0.5)',
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  }
})
