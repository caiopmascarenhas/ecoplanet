import React from 'react'
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { heightPercentageToDP, widthPercentageToDP } from '../../constants/PixelRatio';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #563399;
  flex:1;
  width: 100%;
  height: 100%;
`

export const Header = styled.View`
  padding: 24px 24px 5px;
  padding-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonTitle = styled.Text`
  font-size: 18px;
  color: #F4EDE8;
  font-weight: 700; 
  margin-left: 10%;
`

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Content = styled.View`
  padding: 0 8%;
  justify-content: center;
`

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 4%;
  margin-bottom: 8%;
  font-family: 'Roboto';
  font-weight:700;
  color: #fff;
`

export const MapContainer = styled.View`

`

export const MapMarkerContainer = styled.View`
  width: 90px;
	height: 70px;
	background: #34CB79;
	flex-direction: column;
	border-radius: 8px;
	overflow: hidden;
	align-items: center;    
`

export const MapTitle = styled.Text`
  flex:1;
  font-family: 'Roboto';
  color: #FFF;
  font-size: 13px;
  line-height: 23px;
`

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight:700;
  color: #C2C0C0;
  font-family: 'Roboto';
  margin: 20px 0 20px;  
`

export const styles = StyleSheet.create({
  inputSelect: {
    color: "#000"
  },
  map: {
    height: heightPercentageToDP('55%'),
    width: widthPercentageToDP('84%'),
    borderRadius: 200,
  },
  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },
  mapMarker: {
    width: 90,
    height: 80,
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 100,
    width: 90,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  itemTitle: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 12,
  },

});

