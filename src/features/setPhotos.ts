import { createSlice } from "@reduxjs/toolkit";
import { Photos } from '../types/Photo';

const defaultValue: Photos = {value: []};

const photosSlice = createSlice({
    name: 'photos',
    initialState: defaultValue,
    reducers: {
        setPhotos: (photos, action) => {
            photos.value = action.payload;
            // console.log(photos.value);
        },
    },
});

export default photosSlice.reducer;
export const { actions } = photosSlice;