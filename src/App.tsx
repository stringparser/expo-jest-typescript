import React, { Suspense } from 'react';
import { Platform } from 'react-native';
import Router from './components/Router';
import Loading from './components/Loading';
import { createBrowserApp } from '@react-navigation/web';

const Application = Platform.OS === 'web'
  ? createBrowserApp(Router)
  : Router
;

export default () => (
  <Suspense fallback={<Loading />}>
    <Application />
  </Suspense>
);
