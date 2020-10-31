import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import About from '../screens/about';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'Review Details',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
};

// home stack navigator screens
const AboutStak = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: '#B7B7B7', height: 60 }
  }
});

export default AboutStak;