import React from "react";
import { ActivityIndicator, View } from "react-native";
import styles from './styles';

const Loading: React.FC = () => {

  return (
    <View style={[styles.container, styles.horizontal]}>   
      <ActivityIndicator size="large" color="#34CB79" />
    </View>
  )
}

export default Loading;