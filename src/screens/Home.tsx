import * as React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import Divider from '../components/Divider';
import Container from '../components/Container';
import { NavigateToCardButton } from './Card';

const Main: React.SFC<NavigationScreenProps> = (props) => (
  <Container>
    <Text>Main</Text>
    <Divider />
    <NavigateToCardButton {...props} />
  </Container>
);

export default Main;
