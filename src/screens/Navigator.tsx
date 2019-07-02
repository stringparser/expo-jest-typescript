import { createStackNavigator } from 'react-navigation';

import Card from './Card';
import Home from './Home';

const Navigator = createStackNavigator(
  {
    Main: {
      path: '',
      screen: Home,
      navigationOptions: () => ({
        title: 'Welcome'
      })
    },
    Card: {
      path: 'card',
      screen: Card,
      navigationOptions: () => ({
        title: 'Card Title',
      })
    },
  },
  {
    cardStyle: {
      height: '100%',
    },
    cardShadowEnabled: false,
    headerLayoutPreset: 'left',
  }
);

export default Navigator;
