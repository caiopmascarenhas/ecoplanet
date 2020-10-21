import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MapView, { Marker } from 'react-native-maps';
import Empresa from '../../assets/assets/empresa.jpg';
import Carreto from '../../assets/assets/carreto.jpg';
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
  Header,
  Content,
  BackButton,
  ButtonTitle,
  MapContainer,
  MapMarkerContainer,
  MapTitle,
  Description
} from './styles';

Icon.loadFont();

const DetailsProvider: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  function handleNavigateToDetailsEnterprisePage() {
    navigate('DetailsEnterprise');
  }

  function handleNavigateToDetailsProviderPage() {
    navigate('DetailsProvider');
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
          <Description>Encontre no mapa um ponto de coleta ou prestador de carreto.</Description>
          <MapContainer>
            <MapView
              style={styles.map}
              loadingEnabled={true}
              initialRegion={{
                latitude: -23.5569494,
                longitude: -46.840088,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
              <Marker
                onPress={handleNavigateToDetailsEnterprisePage}
                style={styles.mapMarker}
                coordinate={{
                  latitude: -23.5569494,
                  longitude: -46.840088,
                }}>
                <MapMarkerContainer>
                  <Image source={Empresa} style={styles.mapMarkerImage} />
                  <MapTitle>Empresa</MapTitle>
                </MapMarkerContainer>
              </Marker>
              <Marker
                onPress={handleNavigateToDetailsProviderPage}
                style={styles.mapMarker}
                coordinate={{
                  latitude: -23.5589747,
                  longitude: -46.8439038,
                }}>
                <MapMarkerContainer>
                  <Image source={Carreto} style={styles.mapMarkerImage} />
                  <MapTitle>Carreto</MapTitle>
                </MapMarkerContainer>
              </Marker>
            </MapView>
          </MapContainer>
          <ScrollView
            style={{ marginTop: 40, paddingBottom: '6%' }}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 2, }}>
            <TouchableOpacity
              style={styles.item}
              activeOpacity={0.7}>
              <Image source={Bateriais} style={{ width: 40, height: 40 }} />
              <Text style={styles.itemTitle}>Pilhas Baterias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item]}
              activeOpacity={0.7}>
              <Image source={PapeisEPapelao} style={{ width: 40, height: 40 }} />
              <Text style={styles.itemTitle}>Papéis e Papelão</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item]}
              activeOpacity={0.7}>
              <Image source={Moveis} style={{ width: 40, height: 40 }} />
              <Text style={styles.itemTitle}>Movéis</Text>
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
        </Content>
      </Container>
    </ScrollView>
  );
};

export default DetailsProvider;
