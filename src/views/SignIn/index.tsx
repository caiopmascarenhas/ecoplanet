import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native'
import { Image, KeyboardAvoidingView, TextInput, Platform, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/assets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';
import {
  Container,
  Title,
  Header,
  BackButton,
  ButtonTitle,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccoutButtonText
} from './styles';

interface SignInFormData {
  email: string,
  password: string,
}

const SignIn: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    navigate('ProfileProvider');
  }, []);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  function handleNavigateToSignUpPage() {
    navigate('SignUp');
  }

  return (
    <>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="arrow-left" size={18} color="#FFF" />
          <ButtonTitle>Voltar</ButtonTitle>
        </BackButton>
      </Header>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 40 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image source={logoImg} style={{ width: '100%', height: 120 }} resizeMode="contain" />
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
            <ForgotPassword>
              <ForgotPasswordText>
                Esqueci minha senha
              </ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={handleNavigateToSignUpPage}>
        <Icon name="log-in" size={20} color="#F4EDE8" />
        <CreateAccoutButtonText>Criar Conta</CreateAccoutButtonText>
      </CreateAccountButton>

    </>
  );
};

export default SignIn;