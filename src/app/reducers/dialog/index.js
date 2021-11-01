import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
    id: '',
    data: {},
};

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        showDialog: (state) => {
            state.show = true;
        },
        hideDialog: () => initialState,
        setDialog: (state, action) => {
            state.id = action.payload.id;
            state.data = action.payload.data;
        },
    },
});

export const { showDialog, hideDialog, setDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
