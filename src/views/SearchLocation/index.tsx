import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonBack } from '../../components';
import RNPickerSelect from 'react-native-picker-select';
import { Button, Loading } from '../../components';
import Localization from '../../assets/assets/localization.png';
import { heightPercentageToDP, widthPercentageToDP } from '../../constants/PixelRatio';
import {
  styles,
  Container,
  Header,
  Content,
  ContentBanner,
  ContentTitle,
  InputTitle,
  InputSelected,
  ButtonContainer,
  Footer,



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
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

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
    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      navigate('LocaleMap');

    }, 5000);

  }

  return (
    <>

      {loading ? (<Loading />) : null}

      <Header>
        <ButtonBack icon="arrow-left" color="#FFF" size={18} />
      </Header>

      <ScrollView >

        <Container>

          <ContentBanner>
            <Image source={Localization} style={{
              width: widthPercentageToDP('100%'),
              height: heightPercentageToDP('10%'),
              resizeMode: 'contain',
            }} />
            <ContentTitle>Localizar serviços de coleta</ContentTitle>
          </ContentBanner>

          <Content>

            <InputTitle>Estado</InputTitle>

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

            <InputTitle>Cidade</InputTitle>

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

          </Content>

        </Container>

      </ScrollView>

      <Footer>
        <ButtonContainer>
          <Button onPress={handleNavigateToDetailsProviderPage}>BUSCAR</Button>
        </ButtonContainer>
      </Footer>

    </>
  );
};



export default SearchLocation;
