import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
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

export const Content = styled.View`
  padding: 0 8% 30%;
  justify-content: center;
`

export const NameProvider = styled.Text`
  color: #e0e0e0;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Roboto';
`

export const Description = styled.View`
  margin-top: 5%;
`

export const Title = styled.Text`
  color: #e0e0e0;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const WhatsApp = styled.Text`
  color: #e0e0e0;
  font-size: 16px;
  font-family: 'Roboto';
  margin-top: 2%;
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

export const Subscription = styled.View`
  margin-top: 10%;
`

export const Date = styled.Text`
  color: #e0e0e0;
  font-size: 16px;
  font-family: 'Roboto';
  margin-top: 2%;
`

export const Card = styled.Text`
  color: #e0e0e0;
  font-size: 16px;
  font-family: 'Roboto';
  margin-top: 2%;
`

export const AddressContent = styled.Text`
  margin-top: 2%;
  line-height: 24px;
  font-size: 16px;
  font-family: 'Roboto';
  color: #e0e0e0;
`

export const Footer = styled.View`
  position:absolute;
  
  bottom:0;
  width:100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 5%;
  background: #563399;
`

export const Button = styled(RectButton)`
  width: 43%;
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