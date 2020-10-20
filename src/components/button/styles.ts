import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #04D361;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  color: #F4EDE8;
  font-size: 18px;
  font-weight: 700;
`;

