import { StatusBar } from 'expo-status-bar';

import { fetchPhotosList } from './src/tools/fetchPhotosList';
import { useEffect } from "react";
import { Provider } from "react-redux";
import { actions } from "./src/features/setPhotos";
import { store } from "./src/store";
import { Gallery } from "./src/screens/galery";
import { useAppDispatch } from "./src/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhotoPage } from "./src/screens/photoPage";
import { RootStackParamList } from "./src/types/RootStackParamList";

function App() {
  const dispatch = useAppDispatch();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
      (async () => {
         const photos = await fetchPhotosList();
         await dispatch(actions.setPhotos(photos));
      })();
  }, [dispatch]);

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Gallery}
              />
              <Stack.Screen
                name="PhotoPage"
                component={PhotoPage}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


export default () => {
    return (
      <Provider store={store}>
        <StatusBar style={"auto"}></StatusBar>
        <App />
      </Provider>
    );
}