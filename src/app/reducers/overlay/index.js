import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
};

const overlaySlice = createSlice({
    name: 'overlay',
    initialState,
    reducers: {
        show: (state) => {
            state.show = true;
        },
        hide: (state) => {
            state.show = false;
        },
    },
});

export const { show, hide } = overlaySlice.actions;

export default overlaySlice.reducer;
