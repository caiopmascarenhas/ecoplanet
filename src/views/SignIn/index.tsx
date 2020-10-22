import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonBack, Input } from '../../components';
import logoImg from '../../assets/assets/logo.png';
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
  ForgotPassword,
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

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    navigate('ProfileProvider');
  }, []);

  function handleNavigateToSignUpPage() {
    navigate('SignUp');
  }

  return (
    <>

      <Header>
        <ButtonBack icon="arrow-left" color="#FFF" size={18}  />
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

            </Content>

          </Container>

        </ScrollView>

      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;