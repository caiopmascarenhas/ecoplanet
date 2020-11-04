import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, ButtonBack, ToastSuccess } from '../../components';
import logPayment from '../../assets/assets/payment.png';
import {widthPercentageToDP, heightPercentageToDP} from '../../constants/PixelRatio';
import {
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {
  Container,
  ContentImage,
  Title,
  Header,
  Description,
} from './styles';

const Payment: React.FC = () => {

  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const cardInputRef = useRef<TextInput>(null);
  const dateInputRef = useRef<TextInput>(null);
  const cvvInputRef = useRef<TextInput>(null);


  const saveCard = useCallback(() => {

    ToastSuccess('Cartão cadastrado com sucesso')

    setTimeout(() => {

      navigate('ProfileProvider')
    }, 1500);


  }, []);

  return (
    <>
      <Header>
        <ButtonBack icon="arrow-left" color="#FFF" size={18} />
      </Header>

      <KeyboardAvoidingView
        style={{ flex: 1, }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <ScrollView>

          <Container>

            <ContentImage>   
              <Image source={logPayment} 
                  style={{ 
                  width: widthPercentageToDP('100%'), 
                  height: heightPercentageToDP('14%'), 
                  borderRadius: heightPercentageToDP('2%'),
                  marginTop: 5, 
                  marginBottom: 20, }} 
                  resizeMode="contain"
                />
            </ContentImage>

            <Title>Método de Pagamento</Title>

            <Description>Valor a ser cobrado: R$ 15,00</Description>

            <Form ref={formRef} onSubmit={saveCard}>
              <Input
                autoCapitalize="words"
                name="name"
                feather="user"
                placeholder="Nome proprietário"
                returnKeyType="next"
                onSubmitEditing={() => { cardInputRef.current?.focus() }}
              />
              <Input
                ref={cardInputRef}
                keyboardType="phone-pad"
                autoCorrect={false}
                name="card"
                fontAwesome="credit-card"
                placeholder="Número do cartão"
                returnKeyType="next"
                onSubmitEditing={() => { dateInputRef.current?.focus() }}
              />
              <Input
                ref={dateInputRef}
                autoCapitalize="words"
                autoCorrect={false}
                name="calendar"
                fontAwesome="calendar"
                placeholder="Data de vencimento"
                returnKeyType="next"
                onSubmitEditing={() => { cvvInputRef.current?.focus() }}
              />
              <Input
                ref={cvvInputRef}
                keyboardType="phone-pad"
                name="password"
                feather="lock"
                placeholder="Código de segurança"
                returnKeyType="next"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button onPress={saveCard}>Salvar</Button>

            </Form>

          </Container>

        </ScrollView>

      </KeyboardAvoidingView>
    </>
  );
};

export default Payment;