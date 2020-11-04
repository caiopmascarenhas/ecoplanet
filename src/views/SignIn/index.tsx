import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonBack, Input, Loading } from '../../components';
import LoginImg from '../../assets/assets/login.png';
import {widthPercentageToDP, heightPercentageToDP} from '../../constants/PixelRatio';
import {
  Image,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  View,
  ScrollView
} from 'react-native';
import {
  Container,
  Title,
  Header,
  ForgotContainer,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccoutButtonText,
  Content
} from './styles';

interface SignInFormData {
  email: string,
  password: string,
}

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async (data: SignInFormData) => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      navigate('ProfileProvider');

    }, 5000);


  }, []);


  function handleNavigateToSignUpPage() {

    navigate('SignUp');
  }

  function handleNavigateToForgotPasswordPage() {

    navigate('ForgotPassword');
  }

  return (
    <>

      {loading ? (<Loading />) : null}

      <Header>
        <ButtonBack icon="arrow-left" color="#FFF" size={18} />
        <CreateAccountButton onPress={handleNavigateToSignUpPage}>
          <CreateAccoutButtonText>Criar Conta</CreateAccoutButtonText>
        </CreateAccountButton>
      </Header>

      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 40 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>

          <Container>

            <Content>

              <Image source={LoginImg} style={{ width: widthPercentageToDP('100%'), height: heightPercentageToDP('15%') }} resizeMode="contain" />

              <View>
                <Title>Faça seu logon</Title>
              </View>

              <Form ref={formRef} onSubmit={handleSignIn}>

                <Input
                  onSubmitEditing={() => { passwordInputRef.current?.focus() }}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  name="email"
                  feather="mail"
                  placeholder="E-mail" />

                <Input
                  ref={passwordInputRef}
                  onSubmitEditing={() => { formRef.current?.submitForm() }}
                  secureTextEntry
                  returnKeyType="send"
                  name="password"
                  feather="lock"
                  placeholder="Senha" />

                <Button onPress={() => { formRef.current?.submitForm() }}>Entrar</Button>

              </Form>

              <ForgotContainer onPress={handleNavigateToForgotPasswordPage}>
                <ForgotPasswordText>
                  Esqueci minha senha
             </ForgotPasswordText>
              </ForgotContainer>

            </Content>

          </Container>

        </ScrollView>

      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;