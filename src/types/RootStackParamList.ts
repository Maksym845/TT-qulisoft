import {Photo} from "./Photo";

export type RootStackParamList = {
  Home: undefined,
  PhotoPage: {
    image: Photo,
  };
};