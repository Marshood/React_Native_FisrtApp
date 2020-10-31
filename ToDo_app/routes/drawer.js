import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import ReviewDetails from '../screens/reviewDetails';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import Login from './login'
 // drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
//   ReviewDetails: {
//     screen: ReviewDetails,
// },
//  Login: {
//     screen: Login,
// },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);