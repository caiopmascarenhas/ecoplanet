import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #ECECEC;
  border-radius: 10px;
  margin-bottom: 8px;
 
  flex-direction: row;
  align-items: center;

  ${props => props.isErrored && css`
     border-color: #c53030;
  `}

  ${props => props.isFocused && css`
     border-color: #F4EDE8;
  `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #563399;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Feather = styled(FeatherIcon)`
  margin-right: 18px;
`;

export const FontAwesome = styled(FontAwesomeIcon)`
  margin-left: -15px;
  margin-right: 18px;
`
