import React from 'react'
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  width: 100%;
  height: 100%;
`

export const Header = styled.View`
  padding: 24px 24px 2px;
  padding-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.View`
  padding: 0 8%;
  justify-content: center;
`

export const ContentBanner = styled.View`
  align-items: center;
  padding-top: 5%;
`

export const ContentTitle = styled.Text`
  color: #f5ede8;
  font-size: 22px;
  font-weight: 700;
  font-family: 'Roboto';
  margin-bottom: 5%;
  margin-top: 10%;
`

export const InputTitle = styled.Text`
  color: #C2C0C0;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
  line-height: 24px;
  margin: 2% 0 2%;
 
`

export const InputSelected = styled.View`
  justify-content: center;
  align-items: center;
  background: #eeeeee;
  color: #000;
  margin-bottom: 10%;
  height: 60px;
  border-radius: 10px;
  padding-left: 5%;
`

export const ButtonContainer = styled.View`
    margin-top: 20%;
    padding-bottom: 6%;
`

export const Footer = styled.View`
  position:absolute;
  bottom:0;
  width:100%;
  justify-content: center;
  padding: 0% 5% 2%;
`

export const styles = StyleSheet.create({
  inputSelect: {
    color:"#000",
    fontWeight: 'bold',
  },

});






