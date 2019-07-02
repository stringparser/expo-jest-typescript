import { lazy } from 'react';
import { createStackNavigator } from 'react-navigation';

const Router = createStackNavigator(
  {
    Main: {
      path: '/',
      screen: lazy(() => import('../screens/Home'))
    },
    Chat: {
      path: 'chat',
      screen: lazy(() => import('../screens/Chat'))
    },
  },
  {
    headerMode: 'none'
  }
);

export default Router;
