import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Carreto from '../../assets/assets/carreto.jpg';
import {
  Container,
  Header,
  Content,
  BackButton,
  ButtonTitle,
  Title,
  Items,
  Address,
  AddressTitle,
  AddressContent,
  Footer,
  Button,
  ButtonText,
} from './styles';

Feather.loadFont();

const DetailsProvider: React.FC = () => {

  const { navigate, goBack } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  function handleComposeMail() {
    Alert.alert('Function Mock');
  }

  function handleWhatsapp() {
    Alert.alert('Function Mock');
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <BackButton onPress={navigateBack}>
            <Feather name="arrow-left" size={18} color="#FFF" />
            <ButtonTitle>Voltar</ButtonTitle>
          </BackButton>
        </Header>
        <Content>
          <Image source={Carreto} style={{
            width: '100%',
            height: 180,
            resizeMode: 'cover',
            borderRadius: 10,
            marginTop: 32,
          }} />
          <Title>Kombi Carreto</Title>
          <Items>Papéis e Papelão, Móveis</Items>
          <Address>
            <AddressTitle>R. Serra Paranapiacaba , 15232</AddressTitle>
            <AddressContent>Carapicuiba, São Paulo</AddressContent>
          </Address>
          <Footer>
            <Button onPress={handleWhatsapp}>
              <FontAwesome name='whatsapp' size={20} color='#FFF' />
              <ButtonText>WhatsApp</ButtonText>
            </Button>
            <Button onPress={handleComposeMail}>
              <Feather name="mail" size={20} color='#FFF' />
              <ButtonText>E-mail</ButtonText>
            </Button>
          </Footer>
        </Content>
      </Container>
    </ScrollView>
  );
};

export default DetailsProvider;
