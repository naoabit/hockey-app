import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    year: 2021,
    coach: '',
    players: [
        {
            id: 1, name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: true,
        },
        {
            id: 2, name: 'Jean', lastName: 'Dujardin', number: 5, position: 'left', isCaptain: false,
        },
        {
            id: 3, name: 'Scarlett', lastName: 'Johanson', number: 13, position: 'right', isCaptain: false,
        },
        {
            id: 4, name: 'Kristen', lastName: 'Stewart', number: 3, position: 'centre', isCaptain: false,
        },
        {
            id: 5, name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            id: 6, name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            id: 7, name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            id: 8, name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            id: 9, name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
    ],
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers: {},
});

export default teamSlice.reducer;
