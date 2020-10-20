import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #563399;
  flex:1;
  width: 100%;
  height: 100%;
  padding: 0 8%;
`;

export const ContainerHeader = styled.View`
  align-items: center;
  margin-top: 20%;
`

export const HeaderTitle = styled.Text`
  font-size: 30px;
  color: #F4EDE8;
  font-weight: 700;
  margin-top: 10%;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #F4EDE8;
  font-family: 'Roboto';
  margin: 15% 0 5%;
  font-weight: 400;
  line-height: 30px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #F4EDE8;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 30px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 13%;
  justify-content: space-between;
`

export const ButtonPrimary = styled(RectButton)`
  background: #9871F5;
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 6%;
  justify-content: space-between;
`
export const ButtonSecondary = styled(RectButton)`
  background: #04D361;
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 6%;
  justify-content: space-between;
`
export const ButtonText = styled.Text`
  font-size: 20px;
  color: #F4EDE8;
  font-weight: 700;
`

export const Footer = styled.View`
  margin-top: 10%;
  flex-direction: row;
  align-items: center;
`
export const FooterText = styled.Text`
  line-height: 20px;
  color: #D4C2FF;
  font-weight: 400;
  font-family: 'Roboto';
  margin-right: 20px;
`



