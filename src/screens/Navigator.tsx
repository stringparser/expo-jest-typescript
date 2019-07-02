import Chat from './Chat';
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
    Chat: {
      path: 'chat',
      screen: Chat
    },
  }
);

export default Navigator;
