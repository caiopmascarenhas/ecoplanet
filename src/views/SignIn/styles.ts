import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex:1;
  justify-content: center;
`

export const Content = styled.View`
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 0 : 40}px;
  padding-bottom: 10px;
`

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 20}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CreateAccountButton = styled.TouchableOpacity`
`

export const CreateAccoutButtonText = styled.Text`
  color: #F4EDE8;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
`

export const Title = styled.Text`
  font-size: 24px;
  color: #F4EDE8;
  font-family: 'Roboto';
  margin: 36px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #F4EDE8;
  font-size: 16px;
  font-family: 'Roboto';
`;

