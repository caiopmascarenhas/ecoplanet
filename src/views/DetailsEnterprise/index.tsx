// import React, { useCallback, useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { Alert, Image, Linking } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import Empresa from '../../assets/assets/empresa.jpg';
// import {
//   Container,
//   Header,
//   Content,
//   BackButton,
//   ButtonTitle,
//   Title,
//   Items,
//   Address,
//   AddressTitle,
//   AddressContent,
//   Footer,
//   Button,
//   ButtonText,
// } from './styles';
// import { ScrollView } from 'react-native-gesture-handler';

// Feather.loadFont();

// const DetailsEnterprise: React.FC = () => {

//   const { navigate, goBack } = useNavigation();
//   const navigateBack = useCallback(() => {
//     goBack();
//   }, [goBack]);

//   function handleComposeMail() {
//     Alert.alert('Function Mock');
//   }

//   function handleWhatsapp() {
//     Alert.alert('Function Mock');
//   }

//   return (
//     <ScrollView>
//       <Container>
//         <Header>
//           <BackButton onPress={navigateBack}>
//             <Feather name="arrow-left" size={18} color="#FFF" />
//             <ButtonTitle>Voltar</ButtonTitle>
//           </BackButton>
//         </Header>
//         <Content>
//           <Image source={Empresa} style={{
//             width: '100%',
//             height: 180,
//             resizeMode: 'cover',
//             borderRadius: 10,
//             marginTop: 32,
//           }} />
//           <Title>Seven Papelões</Title>
//           <Items>Papéis e Papelão, Pilhas e Baterias</Items>
//           <Address>
//             <AddressTitle>R. Serra de Mailasqui, 85</AddressTitle>
//             <AddressContent>Carapicuiba, São Paulo</AddressContent>
//           </Address>
//           <Footer>
//             <Button onPress={handleWhatsapp}>
//               <FontAwesome name='whatsapp' size={20} color='#FFF' />
//               <ButtonText>WhatsApp</ButtonText>
//             </Button>
//             <Button onPress={handleComposeMail}>
//               <Feather name="mail" size={20} color='#FFF' />
//               <ButtonText>E-mail</ButtonText>
//             </Button>
//           </Footer>
//         </Content>
//       </Container>
//     </ScrollView>
//   );
// };

// export default DetailsEnterprise;

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Empresa from '../../assets/assets/empresa.jpg';
import { ButtonBack, ToastError } from '../../components';
import {
  Container,
  Header,
  Content,
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
} from './styles';

Feather.loadFont();

const DetailsEnterprise: React.FC = () => {

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

            <Image source={Empresa} style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain',
              borderRadius: 10,

            }} />

            <Description>
              <NameProvider>Jhon Doe</NameProvider>
              <Title>Seven Papelões</Title>
              <WhatsApp>(00) 00000-0000</WhatsApp>
            </Description>

            <Items>Papéis e Papelão, Pilhas e Baterias</Items>

            <Address>
              <AddressTitle>R. Serra de Mailasqui, 85</AddressTitle>
              <AddressContent>Carapicuiba, São Paulo</AddressContent>
            </Address>

            <Subscription>
              <Title>Valor do serviço</Title>
              <Info>Verificar com o estabelicimento local</Info>
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

export default DetailsEnterprise;

