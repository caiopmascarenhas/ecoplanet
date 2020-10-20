import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Content,
  BackButton,
  ButtonTitle,
  MapContainer,

} from './styles';
import Button from '../../components/button';

Icon.loadFont();

const DetailsProvider: React.FC = () => {

  const { goBack } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="arrow-left" size={18} color="#FFF" />
          <ButtonTitle>Voltar</ButtonTitle>
        </BackButton>
      </Header>
      <Content>
        <MapContainer>
          
        </MapContainer>
      </Content>
    </Container>
  );
};

export default DetailsProvider;
