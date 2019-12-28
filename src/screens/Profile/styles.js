import {StyleSheet} from'react-native';
import * as COLOR from '../../resources/colors';

export default s = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.pink,
    height: 40,
    width: 200,
    borderRadius: 4,
    margin: 10, 
  },
});
