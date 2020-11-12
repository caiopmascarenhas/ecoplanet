import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Carreto from '../../assets/assets/carreto.jpg';
import PhotoCamera from '../../assets/assets/camera.png';
import ImagePicker from 'react-native-image-picker';
import { ButtonBack } from '../../components';
import { widthPercentageToDP, heightPercentageToDP } from '../../constants/PixelRatio';
import {
  Container,
  Header,
  Content,
  ContentImage,
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
  Subscription,
  Date,
  Card,
  Camera
} from './styles';

Feather.loadFont();

const ProfileProvider: React.FC = () => {

  const { navigate } = useNavigation();

  function handleEditProfile() {
    navigate('EditProfile')
  }

  function handlePayment() {
    navigate('Payment')
  }

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker({
      title: 'Selecione uma foto',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'User câmera',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      

    }, response => {

    });

  },[]);

  return (
    <>
      <Header>
        <ButtonBack icon="log-out" color="#FFF" size={18} title="Sair" />
        <NameProvider>Jhon Doe</NameProvider>
      </Header>

      <ScrollView >

        <Container>

          <Content>

            <ContentImage>
              <Image source={Carreto}
                style={{
                  width: widthPercentageToDP('100%'),
                  height: heightPercentageToDP('27%'),
                  borderRadius: heightPercentageToDP('2%'),
                  marginTop: 5,
                  marginBottom: heightPercentageToDP('2%'),
                }}
                resizeMode="contain"
              />
              <Camera>
                <TouchableOpacity
                  onPress={handleUpdateAvatar}
                  activeOpacity={0.6}>
                  <Image source={PhotoCamera}
                    style={{
                      width: widthPercentageToDP('100%'),
                      height: heightPercentageToDP('7%'),
                      borderRadius: heightPercentageToDP('2%'),
                      opacity: 0.7,
                      marginBottom: heightPercentageToDP('2%'),
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </Camera>
            </ContentImage>

            <Description>
              <Title>Kombi Carreto</Title>
              <WhatsApp>(00) 00000-0000</WhatsApp>
            </Description>

            <Items>Papéis e Papelão, Móveis</Items>

            <Address>
              <AddressTitle>R. Serra Paranapiacaba , 15232</AddressTitle>
              <AddressContent>Carapicuiba, São Paulo</AddressContent>
            </Address>

            <Subscription>
              <Title>Renovação da assinatura</Title>
              <Date>Data: 30/11/2020</Date>
              <Card>Cartão: ****4585</Card>
            </Subscription>

          </Content>

        </Container>

      </ScrollView>

      <Footer>
        <Button style={{ backgroundColor: '#FF4242', marginRight: 10 }} onPress={handlePayment}>
          <FontAwesome name='credit-card' size={20} color='#FFF' />
          <ButtonText>Assinatura</ButtonText>
        </Button>
        <Button onPress={handleEditProfile}>
          <Feather name="edit" size={20} color='#FFF' />
          <ButtonText>Editar dados</ButtonText>
        </Button>
      </Footer>

    </>
  );
};

export default ProfileProvider;
