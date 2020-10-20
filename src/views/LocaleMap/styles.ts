import React from 'react'
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #563399;
  flex:1;
  width: 100%;
  height: 100%;
`
export const Header = styled.View`
  padding: 24px;
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
export const MapContainer = styled.View`
  
`
