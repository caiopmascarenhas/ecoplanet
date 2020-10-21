import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native'
import { Image, TextInput, KeyboardAvoidingView, Platform, View, ScrollView, CheckBox, TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import logoImg from '../../assets/assets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';
import Bateriais from '../../assets/assets/bateriais.png';
import Lampadas from '../../assets/assets/lampadas.png';
import Oleo from '../../assets/assets/oleo.png';
import Organicos from '../../assets/assets/organicos.png';
import PapeisEPapelao from '../../assets/assets/papeisepapelao.png';
import Eletronico from '../../assets/assets/eletronicos.png';
import Moveis from '../../assets/assets/moveis.png';
import {
  styles,
  Container,
  Title,
  BackToSignIn,
  BackToSignInText,
  InputSelected,
  Header,
  BackButton,
  ButtonTitle
} from './styles';

interface SignUpFormData {
  name: string,
  email: string,
  password: string,
}

const EditProfile: React.FC = () => {

  const { goBack, navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const entityInputRef = useRef<TextInput>(null);
  const whatsappInputRef = useRef<TextInput>(null);
  const cepInputRef = useRef<TextInput>(null);
  const stateInputRef = useRef<TextInput>(null);
  const cityInputRef = useRef<TextInput>(null);

  const handleProfile = useCallback(async (data: SignUpFormData) => {
    navigate('ProfileProvider');
  }, []);

  const handleBack = (() => {
    goBack();
  })

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header>
          <BackButton onPress={handleBack}>
            <Feather name="arrow-left" size={18} color="#FFF" />
            <ButtonTitle>Voltar</ButtonTitle>
          </BackButton>
        </Header>
        <ScrollView>
          <Container>
            <Image source={logoImg} style={{ width: '100%', height: 120, marginTop: 30 }} resizeMode="contain" />
            <View>
              <Title>Alterar dados</Title>
            </View>
            <Form ref={formRef} onSubmit={handleProfile}>
              <Input
                autoCapitalize="words"
                name="name"
                feather="user"
                placeholder="Jhoe Doe"
                returnKeyType="next"
                onSubmitEditing={() => { emailInputRef.current?.focus() }}
              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                feather="mail"
                placeholder="jhondoe@example.com"
                returnKeyType="next"
                onSubmitEditing={() => { passwordInputRef.current?.focus() }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                textContentType="newPassword"
                name="password"
                feather="lock"
                placeholder="***********"
                returnKeyType="next"
                onSubmitEditing={() => entityInputRef.current?.focus()}
              />
              <InputSelected>
                <RNPickerSelect
                  style={{ inputIOS: styles.inputSelect, inputAndroid: styles.inputSelect }}
                  placeholder={{ label: 'PRESTADOR DE SERVIÇO CARRETO', color: "#666360" }}
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: 'EMPRESA LOCAL', value: 'EMPRESA LOCAL' },
                    { label: 'PRESTADOR DE SERVIÇO CARRETO', value: 'PRESTADOR DE SERVIÇO CARRETO' },
                  ]}
                />
              </InputSelected>
              <Input
                ref={entityInputRef}
                autoCapitalize="words"
                autoCorrect={false}
                name="entity"
                feather="user"
                placeholder="Kombi Carreto"
                returnKeyType="next"
                onSubmitEditing={() => whatsappInputRef.current?.focus()}
              />
              <Input
                ref={whatsappInputRef}
                autoCapitalize="words"
                keyboardType="phone-pad"
                autoCorrect={false}
                name="whatsapp"
                fontAwesome="whatsapp"
                placeholder="(00) 00000-0000"
                returnKeyType="next"
                onSubmitEditing={() => cepInputRef.current?.focus()}
              />
              <Input
                ref={cepInputRef}
                autoCapitalize="words"
                autoCorrect={false}
                name="cep"
                feather="map"
                placeholder="00000-000"
                keyboardType="number-pad"
                returnKeyType="next"
                onSubmitEditing={() => stateInputRef.current?.focus()}
              />
              <Input
                ref={stateInputRef}
                autoCapitalize="words"
                autoCorrect={false}
                name="states"
                feather="map"
                placeholder="São Paulo"
                returnKeyType="next"
                onSubmitEditing={() => cityInputRef.current?.focus()}
              />
              <Input
                ref={cityInputRef}
                autoCapitalize="words"
                autoCorrect={false}
                name="city"
                feather="map"
                placeholder="Carapicuíba"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <ScrollView
                style={{ marginTop: 40, paddingBottom: '20%' }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 2 }}>
                <TouchableOpacity
                  style={styles.item}
                  activeOpacity={0.7}>
                  <Image source={Bateriais} style={{ width: 40, height: 40 }} />
                  <Text style={styles.itemTitle}>Pilhas Baterias</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.item, { borderColor: '#34CB79', borderWidth: 4 }]}
                  activeOpacity={0.7}>
                  <Image source={PapeisEPapelao} style={{ width: 40, height: 40 }} />
                  <Text style={styles.itemTitle}>Papéis e Papelão</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.item, { borderColor: '#34CB79', borderWidth: 4 }]}
                  activeOpacity={0.7}>
                  <Image source={Moveis} style={{ width: 40, height: 40 }} />
                  <Text style={styles.itemTitle}>Móveis</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.item}
                  activeOpacity={0.7}>
                  <Image source={Lampadas} style={{ width: 40, height: 40 }} />
                  <Text style={styles.itemTitle}>Lâmpadas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.item}
                  activeOpacity={0.7}>
                  <Image source={Oleo} style={{ width: 40, height: 40 }} />
                  <Text style={styles.itemTitle}>Óleo de Cozinha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.item}
                  activeOpacity={0.7}>
                  <Image source={Organicos} style={{ width: 40, height: 40 }} />
                  <Text style={styles.itemTitle}>Resíduo Orgânicos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.item}
                  activeOpacity={0.7}>
                  <Image source={Eletronico} style={{ width: 40, height: 40 }} />
                  <Text style={styles.itemTitle}>Resíduos Eletrônicos</Text>
                </TouchableOpacity>
              </ScrollView>
              <Button onPress={handleProfile}>Salvar alteração</Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;