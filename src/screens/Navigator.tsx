import Card from './Card';
import Home from './Home';
import { createStackNavigator } from 'react-navigation';

const Navigator = createStackNavigator(
  {
    Main: {
      path: '',
      screen: Home,
      navigationOptions: () => ({
        header: null,
      })
    },
    Card: {
      path: 'chat',
      screen: Card
    },
  }
);

export default Navigator;
