import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from '../../components';
import Localization from '../../assets/assets/localization.png';
import {
  styles,
  Container,
  Header,
  Content,
  BackButton,
  ButtonTitle,
  ContentBanner,
  ContentTitle,
  InputSelected,
  ButtonContainer,
} from './styles';

Icon.loadFont();

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const SearchLocation: React.FC = () => {

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState(' ');
  const [selectedCity, setSelectedCity] = useState(' ');
  const { goBack, navigate } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === ' ') {
      setCities([]);
      return;
    };

    axios
      .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectUf(value: string) {
    setSelectedUf(value);
  }

  function handleSelectCity(value: string) {
    setSelectedCity(value);
  }

  function handleNavigateToDetailsProviderPage() {
    Alert.alert('Os dados nas próximas telas são mocados')
    navigate('LocaleMap');
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <BackButton onPress={navigateBack}>
            <Icon name="arrow-left" size={18} color="#FFF" />
            <ButtonTitle>Voltar</ButtonTitle>
          </BackButton>
        </Header>
        <Content>
          <ContentBanner>
            <ContentTitle>Localizar pontos de coleta</ContentTitle>
            <Image source={Localization} style={{ width: '100%', height: 60 }} resizeMode="contain" />
          </ContentBanner>
          <InputSelected>
            <RNPickerSelect
              style={{ inputIOS: styles.inputSelect, inputAndroid: styles.inputSelect }}
              placeholder={{ label: 'Selecione uma UF', color: "#777777" }}
              onValueChange={handleSelectUf}
              value={selectedUf}
              items={ufs.map((uf) => (
                { label: uf, value: uf }
              ))}
            />
          </InputSelected>
          <InputSelected>
            <RNPickerSelect
              style={{ inputIOS: styles.inputSelect, inputAndroid: styles.inputSelect }}
              placeholder={{ label: 'Selecione uma cidade' }}
              onValueChange={handleSelectCity}
              value={selectedCity}
              items={cities.map((city) => (
                { label: city, value: city }
              ))}
            />
          </InputSelected>
          <ButtonContainer>
            <Button onPress={handleNavigateToDetailsProviderPage}>BUSCAR</Button>
          </ButtonContainer>
        </Content>
      </Container>
    </ScrollView>
  );
};



export default SearchLocation;
