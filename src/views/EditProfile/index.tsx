import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { Button, Input, ButtonBack } from '../../components';
import logoImg from '../../assets/assets/logo.png';
import Bateriais from '../../assets/assets/bateriais.png';
import Lampadas from '../../assets/assets/lampadas.png';
import Oleo from '../../assets/assets/oleo.png';
import Organicos from '../../assets/assets/organicos.png';
import PapeisEPapelao from '../../assets/assets/papeisepapelao.png';
import Eletronico from '../../assets/assets/eletronicos.png';
import Moveis from '../../assets/assets/moveis.png';
import {
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import {
  styles,
  Container,
  Title,
  SubTitle,
  InputSelected,
  Header
} from './styles';

interface SignUpFormData {
  name: string,
  email: string,
  password: string,
}

const EditProfile: React.FC = () => {

  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const entityInputRef = useRef<TextInput>(null);
  const whatsappInputRef = useRef<TextInput>(null);
  const cepInputRef = useRef<TextInput>(null);
  const stateInputRef = useRef<TextInput>(null);
  const cityInputRef = useRef<TextInput>(null);
  const addressInputRef = useRef<TextInput>(null);
  const numberInputRef = useRef<TextInput>(null);
  const referenceInputRef = useRef<TextInput>(null);

  const handleProfile = useCallback(async (data: SignUpFormData) => {
    navigate('ProfileProvider');
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

            <Image source={logoImg} style={{ width: '100%', height: 120, marginTop: 5, marginBottom: 20 }} resizeMode="contain" />

            <Title>Alterar cadastro</Title>

            <Form ref={formRef} onSubmit={handleProfile}>
              <Input
                autoCapitalize="words"
                name="name"
                feather="user"
                placeholder="Jhon Doe"
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
                placeholder="***************"
                returnKeyType="next"
                onSubmitEditing={() => entityInputRef.current?.focus()}
              />

              <InputSelected>
                <RNPickerSelect
                  style={{ inputIOS: styles.inputSelect, inputAndroid: styles.inputSelect }}
                  placeholder={{ label: 'Selecione uma UF', color: "#666360" }}
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
                placeholder="(xx) xxxxx-xxxx"
                returnKeyType="next"
                onSubmitEditing={() => cepInputRef.current?.focus()}
              />
              <Input
                ref={cepInputRef}
                name="cep"
                feather="map"
                placeholder="xxxxx-xxx"
                keyboardType="number-pad"
                returnKeyType="next"
                onSubmitEditing={() => stateInputRef.current?.focus()}
              />
              <Input
                ref={addressInputRef}
                autoCapitalize="words"
                autoCorrect={false}
                name="address"
                feather="map"
                placeholder="R. Serra Paranapiacaba"
                returnKeyType="next"
                onSubmitEditing={() => numberInputRef.current?.focus()}
              />
              <Input
                ref={numberInputRef}
                name="number"
                feather="map"
                placeholder="15232"
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
                returnKeyType="next"
                onSubmitEditing={() => referenceInputRef.current?.focus()}
              />
              <Input
                ref={referenceInputRef}
                autoCapitalize="words"
                autoCorrect={false}
                name="reference"
                feather="map"
                placeholder="-"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />


              <SubTitle>Alterar o tipo de coleta</SubTitle>

              <ScrollView
                style={{ marginTop: '5%', paddingBottom: '6%' }}
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

              <Button onPress={handleProfile}>Salvar</Button>

            </Form>

          </Container>

        </ScrollView>

      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;