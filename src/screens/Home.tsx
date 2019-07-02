import * as React from 'react';
import { Text } from 'react-native';
import { NavigateToCardButton } from './Card';
import Container from '../components/Container';
import { NavigationScreenProps } from 'react-navigation';

const Main: React.SFC<NavigationScreenProps> = (props) => (
  <Container>
    <Text>Main</Text>
    <NavigateToCardButton {...props} />
  </Container>
);

export default Main;
