import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 20}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled.View`
  flex:1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 20 : 40}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight:700;
  color: #F4EDE8;
  font-family: 'Roboto';
  margin: 20px 0 5px;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #04D361;
  font-family: 'Roboto';
  font-weight:700;
  padding-bottom: 5%
`

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0%;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 16px;
`;