import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/Home/Home';
import ProfileScreen from './src/screens/Profile/Profile';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
}, {
  initialRouteName: 'Home',
  // header at every screen
  defaultNavigationOptions: {
    title: 'Default Title',
  },
});

export default createAppContainer(navigator);
