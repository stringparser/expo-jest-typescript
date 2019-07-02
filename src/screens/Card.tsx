import * as React from 'react';
import { Button, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';

export const NavigateToCardButton: React.SFC<NavigationScreenProps> = ({ navigation }) => (
  <Button
    title="next"
    onPress={() => navigation.navigate('Card')}
  />
)

const Chat: React.SFC<NavigationScreenProps> = () => (
  <Container>
    <Text>Card</Text>
  </Container>
);

export default Chat;
