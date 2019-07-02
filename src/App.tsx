import React, { Suspense } from 'react';
import { Platform } from 'react-native';
import Router from './components/Router';
import Loading from './components/Loading';
import { createAppContainer } from 'react-navigation';
import { createBrowserApp } from '@react-navigation/web';

const Application = Platform.OS === 'web'
  ? createBrowserApp(Router)
  : createAppContainer(Router)
;

export default () => (
  <Suspense fallback={<Loading />}>
    <Application />
  </Suspense>
);
