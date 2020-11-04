import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Truck from '../../assets/assets/truck.png';
import Search from '../../assets/assets/search.png';
import HeartIcon from '../../assets/assets/heart.png';
import logoImg from '../../assets/assets/logo.png';
import {widthPercentageToDP, heightPercentageToDP} from '../../constants/PixelRatio';
import {
  Container,
  Title,
  SubTitle,
  ButtonContainer,
  ButtonPrimary,
  ButtonText,
  ButtonSecondary,
  Footer,
  FooterText,
  ContainerHeader,
  HeaderTitle
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Home: React.FC = () => {

  const { navigate } = useNavigation();

  function handleNavigateToSignInPage() {
    navigate('SignIn');
  }

  function handleNavigateToSearchServicePage() {
    navigate('SearchLocation');
  }

  return (
    <ScrollView>
      <Container>
        <ContainerHeader>
          <Image source={logoImg} style={{ width: widthPercentageToDP('100%'), height: heightPercentageToDP('20%') }} resizeMode="contain" />
        </ContainerHeader>
        <Title>
          Seja bem-vindo,{'\n'}
          <SubTitle>O que deseja fazer?</SubTitle>
        </Title>
        <ButtonContainer>
          <ButtonPrimary onPress={handleNavigateToSignInPage}>
            <Image source={Truck} style={{ width: widthPercentageToDP('10%'), height: heightPercentageToDP('5%') }} resizeMode="contain" />
            <ButtonText>
              Prestar Serviço
            </ButtonText>
          </ButtonPrimary>
          <ButtonSecondary onPress={handleNavigateToSearchServicePage}>
            <Image source={Search} style={{ width: widthPercentageToDP('10%'), height: heightPercentageToDP('5%') }} resizeMode="contain" />
            <ButtonText>
              Solicitar Serviço
            </ButtonText>
          </ButtonSecondary>
        </ButtonContainer>
        <Footer>
          <FooterText>Nos ajude a salvar o meio ambiente</FooterText>
          <Image source={HeartIcon} />
        </Footer>
      </Container>
    </ScrollView>
  );
};

export default Home;
