import styled from "styled-components/native";
import { Photo } from "../../../types/Photo";
import React from "react";
import { Text } from "react-native";

type Props = {
    image: Photo,
}

const Container = styled.View`
  margin-bottom: 10px;
  padding: 10px 10px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  border-width: 1px;
  border-color: #A6A9AB;
  border-radius: 25px;
  
  max-height: 120px;
 
  box-sizing: border-box;
`

const Image = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 25px;
  object-fit: contain;
`

const Description = styled.Text`
  font-size: 18px;
  max-width: 30%;
`

const TextContainer = styled.View`
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export const GalleryItem = ({ image }: Props) => (
  <Container>
      <Image
        source={{
            uri: image.urls.regular,
        }}
      />
      <Description numberOfLines={3}>{image.description || 'No name'}</Description>
      <TextContainer>
          <Text style={{
              fontWeight: 'bold',
          }}>
              {image.user.username}
          </Text>
          <Text style={{
              color: '#616161',
          }}>
              {
                  image.created_at
                    .split('T')[0]
                    .split('-')
                    .reverse()
                    .join('.')
              }
          </Text>
      </TextContainer>
  </Container>
);
