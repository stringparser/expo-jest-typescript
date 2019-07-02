import { lazy } from 'react';
import { createStackNavigator } from 'react-navigation';

const Router = createStackNavigator(
  {
    Main: {
      path: '',
      screen: lazy(() => import('../screens/Home')),
      navigationOptions: () => ({
        header: null,
      })
    },
    Chat: {
      path: 'chat',
      screen: lazy(() => import('../screens/Chat'))
    },
  },
  {
    cardStyle: {
      height: '100%'
    },
    initialRouteKey: 'Main',
  }
);

export default Router;
