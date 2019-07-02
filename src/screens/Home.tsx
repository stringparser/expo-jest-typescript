import React from 'react';
import { Text } from 'react-native';
import { NavigateToChatButton } from './Chat';
import Container from '../components/Container';
import { NavigationScreenProps } from 'react-navigation';

const Main: React.SFC<NavigationScreenProps> = (props) => (
  <Container>
    <Text>Main</Text>
    <NavigateToChatButton {...props} />
  </Container>
);

export default Main;
