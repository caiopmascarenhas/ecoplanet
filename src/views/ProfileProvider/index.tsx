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
  Description,
  NameProvider,
  WhatsApp,
} from './styles';

Feather.loadFont();

const ProfileProvider: React.FC = () => {

  const { navigate, goBack } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  function handleEditProfile() {
    navigate('EditProfile')
  }

  function handleWhatsapp() {
    Alert.alert('Function Mock');
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <BackButton onPress={navigateBack}>
            <Feather name="log-out" size={18} color="#FFF" />
            <ButtonTitle>Sair</ButtonTitle>
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
          <Description>
            <NameProvider>Jhon Doe</NameProvider>
            <WhatsApp> - (00) 00000-0000</WhatsApp>
          </Description>
          <Items>Papéis e Papelão, Móveis</Items>
          <Address>
            <AddressTitle>R. Serra Paranapiacaba , 15232</AddressTitle>
            <AddressContent>Carapicuiba, São Paulo</AddressContent>
          </Address>
          <Footer>
            <Button style={{ backgroundColor: '#FF4242' }} onPress={handleWhatsapp}>
              <FontAwesome name='credit-card' size={20} color='#FFF' />
              <ButtonText>Assinatura</ButtonText>
            </Button>
            <Button onPress={handleEditProfile}>
              <Feather name="edit" size={20} color='#FFF' />
              <ButtonText>Editar dados</ButtonText>
            </Button>
          </Footer>
        </Content>
      </Container>
    </ScrollView>
  );
};

export default ProfileProvider;
