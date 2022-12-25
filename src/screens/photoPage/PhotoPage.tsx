import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { RootStackParamList } from "../../types/RootStackParamList";
import React from "react";
import { View } from "react-native";

type Nav = NativeStackScreenProps<RootStackParamList, 'PhotoPage'>;

const Image = styled.Image`
  height: 100%;
  width: 100%;
`

export const PhotoPage = ({ navigation, route }: Nav) => {
  const { image } = route.params;

  return (
    <View>
      {route.params && (
        <Image source={{
          uri: image.urls.full,
        }} />
      )}
    </View>
  )
}
