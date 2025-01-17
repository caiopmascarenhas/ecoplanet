import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Carreto from '../../assets/assets/carreto.jpg';
import { ButtonBack, ToastError } from '../../components';
import {widthPercentageToDP, heightPercentageToDP} from '../../constants/PixelRatio';
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
  Info,
  SubInfo
} from './styles';

Feather.loadFont();

const DetailsProvider: React.FC = () => {

  const { navigate } = useNavigation();

  function handleEditProfile() {
    ToastError('Sistema indisponivel')
  }

  function handlePayment() {
    ToastError('Sistema indisponivel')
  }

  return (
    <>
      <Header>
        <ButtonBack icon="arrow-left" color="#FFF" size={18} />
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
                marginBottom: heightPercentageToDP('2%'), }} 
                resizeMode="contain"
              />
            </ContentImage>

            <Description>
              <NameProvider>Jhon Doe</NameProvider>
              <Title>Kombi Carreto</Title>
              <WhatsApp>(00) 00000-0000</WhatsApp>
            </Description>

            <Items>Papéis e Papelão, Móveis</Items>

            <Address>
              <AddressTitle>R. Serra Paranapiacaba , 15232</AddressTitle>
              <AddressContent>Carapicuiba, São Paulo</AddressContent>
            </Address>

            <Subscription>
              <Title>Valor do serviço</Title>
              <Info>Negociamento via telefone ou por e-mail</Info>
              <SubInfo>Pagamento no dia da retirada</SubInfo>
            </Subscription>

          </Content>

        </Container>

      </ScrollView>

      <Footer>
        <Button style={{ marginRight: 10 }} onPress={handlePayment}>
          <FontAwesome name='whatsapp' size={20} color='#FFF' />
          <ButtonText>WhatsApp</ButtonText>
        </Button>
        <Button style={{ backgroundColor: '#9871F5' }} onPress={handleEditProfile}>
          <Feather name="mail" size={20} color='#FFF' />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>

    </>
  );
};

export default DetailsProvider;
