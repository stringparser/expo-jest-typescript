import React from 'react';
import { Button, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';

export const NavigateToChatButton: React.SFC<NavigationScreenProps> = ({ navigation }) => (
  <Button
    title="chat"
    onPress={() => navigation.navigate('Chat')}
  />
)

const Chat: React.SFC<NavigationScreenProps> = () => (
  <Container>
    <Text>Chat</Text>
  </Container>
);

export default Chat;
