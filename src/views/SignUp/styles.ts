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

export const ContentImage = styled.View`
  align-items: center;  
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight:700;
  color: #F4EDE8;
  font-family: 'Roboto';
  margin: 20px 0 24px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-weight:700;
  color: #F4EDE8;
  font-family: 'Roboto';
  margin: 20px 0 0px;  
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