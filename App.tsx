import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

import { News } from './src/News';

const Container = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
  margin-bottom: 0;
`;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  return (
    <View>
      <Container>
        {/*<FlatList data={arr} renderItem={({item}) => (*/}
        {/*)} />*/}
      </Container>
      <StatusBar style="auto" />
    </View>
  );
}
