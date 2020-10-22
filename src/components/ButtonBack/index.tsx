import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RawButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { Button, Title } from './styles';

interface ButtonProps extends RawButtonProperties {
  title?: string;
  icon: string;
  color: string;
  size: number;
}

const ButtonBack: React.FC<ButtonProps> = ({ title, icon, color, size }) => {

  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Button onPress={navigateBack}>
      <Icon name={icon} size={size} color={color} />
      <Title>{title}</Title>
    </Button>
  )
};


export default ButtonBack;
