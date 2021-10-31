import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    year: 2021,
    coach: '',
    players: [
        {
            name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            name: 'Jean', lastName: 'Dujardin', number: 5, position: 'left', isCaptain: false,
        },
        {
            name: 'Scarlett', lastName: 'Johanson', number: 13, position: 'right', isCaptain: false,
        },
        {
            name: 'Kristen', lastName: 'Stewart', number: 3, position: 'centre', isCaptain: false,
        },
        {
            name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
        },
        {
            name: 'Johnny', lastName: 'Depp', number: 3, position: 'centre', isCaptain: false,
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
