import { Platform } from 'react-native';
import Navigator from './screens/Navigator';
import { createAppContainer } from 'react-navigation';
import { createBrowserApp } from '@react-navigation/web';

const Application = Platform.OS === 'web'
  ? createBrowserApp(Navigator)
  : createAppContainer(Navigator)
;

export default Application;
