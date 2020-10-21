import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex:1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #F4EDE8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

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
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const InputSelected = styled.View`
  justify-content: center;
  background: #ECECEC;
  color: #000;
  margin-bottom: 2.5%;
  height: 60px;
  border-radius: 10px;
  padding-left: 5%;
`;

export const styles = StyleSheet.create({
  inputSelect: {
    color: "#563399"
  },
  item: {
		backgroundColor: '#fff',
		borderWidth: 2,
		borderColor: '#eee',
		height: 100,
		width: 90,
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingTop: 16,
		paddingBottom: 16,
		marginRight: 8,
		alignItems: 'center',
		justifyContent: 'space-between',
		textAlign: 'center',
  },
	itemTitle: {
		fontFamily: 'Roboto',
		textAlign: 'center',
		fontSize: 12,
  },
});