import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonBack, Input, Loading, ToastSuccess } from '../../components';
import { widthPercentageToDP, heightPercentageToDP } from '../../constants/PixelRatio';
import EmailImg from '../../assets/assets/email.png';
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
  Content
} from './styles';

interface SignInFormData {
  email: string,
  password: string,
}

const ForgotPassword: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async (data: SignInFormData) => {

    ToastSuccess('E-mail de recuperação enviado!')

    setTimeout(() => {

      navigate('SignIn');

    }, 1500);


  }, []);


  return (
    <>

      {loading ? (<Loading />) : null}

      <Header>
        <ButtonBack icon="arrow-left" color="#FFF" size={18} />
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

              <Image source={EmailImg} style={{
                width: widthPercentageToDP('100%'),
                height: heightPercentageToDP('15%')
              }}
                resizeMode="contain"
              />

              <View>
                <Title>Insira e-mail de recuperação</Title>
              </View>

              <Form ref={formRef} onSubmit={handleSignIn}>

                <Input
                  onSubmitEditing={() => { formRef.current?.focus() }}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="send"
                  name="email"
                  feather="mail"
                  placeholder="E-mail" />

                <Button onPress={() => { formRef.current?.submitForm() }}>Entrar</Button>

              </Form>

            </Content>

          </Container>

        </ScrollView>

      </KeyboardAvoidingView>
    </>
  );
};

export default ForgotPassword;