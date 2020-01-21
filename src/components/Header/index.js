import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Top, Logo, Title,
} from './styles';

import lofo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={lofo} />
        <Title>Wallace</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}
