import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './NavigationService';
// import reducers for redux below
import peopleReducer from './src/redux/reducers/peopleReducer';
// import components for screens below
import HomeScreen from './src/screens/Home/Home';
import ProfileScreen from './src/screens/Profile/Profile';

// add reducers below
const reducer = combineReducers({
  people: peopleReducer,
});
const logger = createLogger();
const middleware = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware),
));

const navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen},
}, {
  initialRouteName: 'Home',
  headerLayoutPreset: 'center',
  // change code below for custom default header
  defaultNavigationOptions: {
    headerBackTitle: null,
  },
});

const AppContainer = createAppContainer(navigator);

const App = () => (
  <Provider store={store}>
    <AppContainer 
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
