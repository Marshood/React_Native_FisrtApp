import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
import Home from '../screens/home';

const screens = {
  About: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='login ' navigation={navigation} />
        }
      },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default AboutStack;