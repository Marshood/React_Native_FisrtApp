import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Todo List',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: '#B7B7B7', height: 60 }
  }
});

export default createAppContainer(HomeStack);