import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.1)',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  listItem: {
    margin: 5,
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
  },
  listItemTxt: {
    color: 'blue',
  },
  flatListStyle: {
    backgroundColor: 'green',
  },
  itemSeparator: {
    borderBottomColor: 'white',
    borderWidth: 2,
  },
  textInput: {
    borderColor: 'lightblue',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  errorMsg: {
    color: 'red',
    padding: 10,
  },
  nameHead: {
    marginBottom: 10,
    marginRight: 10,
  },
  nameInfo: {
    backgroundColor: 'orange',
    width: 20,
    height: 20,
    textAlign: 'center',
    borderRadius: 10,
  },
  infoTxt: {
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    top: -30,
    zIndex: 1,
  },
  nameHeadHolder: {
    flexDirection: 'row',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    top: '40%',
    padding: 30,
    borderRadius: 10,
  },
  modalTxt: {
    color: 'white',
    marginBottom: 10,
  },
});
