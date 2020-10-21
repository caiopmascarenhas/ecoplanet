import React from 'react'
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
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
export const Title = styled.Text`
  color: #e0e0e0;
  font-size: 28px;
  font-weight: 700;
  font-family: 'Roboto';
  margin-top: 18%;
`
export const Items = styled.Text`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 24px;
  margin-top: 8%;
  color: #C2C0C0;
`
export const Address = styled.View`
  margin-top: 8%;
`
export const AddressTitle = styled.Text`
  color: #e0e0e0;
  font-size: 16px;
  font-family: 'Roboto';
`
export const AddressContent = styled.Text`
  margin-top: 2%;
  line-height: 24px;
  font-size: 16px;
  font-family: 'Roboto';
  color: #e0e0e0;
`
export const Footer = styled.View`
  margin-top: 38%;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`
export const Button = styled(RectButton)`
  width: 48%;
  background: #34CB79;
  border-radius: 10px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`
export const ButtonText = styled.Text`
  margin-left: 8%;
  color: #FFF;
  font-size: 16px;
  font-family: 'Roboto'

`