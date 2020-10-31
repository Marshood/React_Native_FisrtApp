import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Todo List' navigation={navigation} />
      }
    },
    /**
     *    navigationOptions: {
     *title: 'Todo List',
     * //headerStyle: { backgroundColor: '#eee' }
     *}
     * 
     */
  },
  ReviewDetails: {
    screen: ReviewDetails,
    // navigationOptions: {
    //   title: 'Review Details',
    // }
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Review Details' navigation={navigation} />
      }
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;