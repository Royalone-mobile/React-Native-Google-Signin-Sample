import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  category: {
    fontSize: 17,
    fontWeight: '500',
    color: 'red',
  },
  googleButtonStyles: {
    width: 120,
    height: 44
  },
  subTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rating: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    alignSelf: 'center',
  },
  responseView: {
    backgroundColor: '#fff',
    height: height / 2.2,
    width: width / 1.15,
    alignSelf: 'center',
    marginTop: height / 4,
    borderRadius: 10,
  },
  responseTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  userPhoto: {
    height: 100,
    width: 100,
  },
  logoutButton: {
    marginTop: 50,
  },
  modalView: {
    width: width / 1.15,
    alignSelf: 'center',
    marginTop: height / 4,
    marginBottom: width / 2,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'transparent',
  },
  responseTitle: {
  },
  response: {
    margin: 20,
  },
  responsefinalView: {
    alignSelf: 'center',
    width: width / 1.3,
    borderRadius: 0,
    justifyContent: 'center',
    marginTop: width / 8,
  },
  crossIcon: {
    height: 30,
    width: 30,
    marginTop: -12,
    position: 'absolute',
  },
  messageView: {
    justifyContent: 'center',
  },
  crossView: {
    color: '#fff',
  },
  backIconButton: {
    marginRight: -20,
    marginTop: -5,
  },
  titleText: {
    color: '#fff',
    fontSize: width / 23,
    marginLeft: 10,
  },
  titleTextView: {
    width: width / 2,
  },
});
module.exports = styles;
