import styled from "styled-components/native";
import { useAppSelector } from "../../hooks";
import { FlatList, Pressable } from "react-native";
import { GalleryItem } from './GaleryItem';
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, 'PhotoPage'>;

const Container = styled.View`
  margin: 25px 10px 0 10px;
`;

export const Gallery = ({ navigation }: Props) => {
    const photos = useAppSelector((state) => state.photos.value);

    return (
      <Container>
        <FlatList data={photos} renderItem={({ item }) => (
          <Pressable onPress={() => {
            navigation.navigate('PhotoPage', {
              image: item,
            });
          }} >
            <GalleryItem image={item} key={item.id}/>
          </Pressable>
        )} />
      </Container>
    );
}