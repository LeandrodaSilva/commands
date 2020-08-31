import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  menuBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    position: 'absolute',
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
