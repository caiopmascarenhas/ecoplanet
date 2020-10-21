import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #F4EDE8;
  
  font-family: 'RobotoSlab-Medium';
  margin: 36px 0 24px;
`;

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

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #F4EDE8;
  font-size: 16px;
  font-family: 'RobotoSlab-regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0%;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccoutButtonText = styled.Text`
  color: #F4EDE8;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;