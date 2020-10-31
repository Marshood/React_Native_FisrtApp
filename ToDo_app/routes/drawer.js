 import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import AboutStak from './aboutStack';

const RootDrawerNavigator=createDrawerNavigator({

    Home:{
        screen: HomeStack,
    },
    About:{
        screen: AboutStak,
    },

})
export default createAppContainer(RootDrawerNavigator);