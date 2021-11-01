import { createSlice } from '@reduxjs/toolkit';
import { getTeamByYear, createPlayer, updatePlayer } from '@app/thunks/player';

const initialState = {
    year: 2021,
    coach: '',
    players: [],
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setYear: (state, action) => {
            state.year = action.payload;
        },
        setPlayers: (state, action) => {
            state.players = action.payload;
        },
    },
    extraReducers: {
        [getTeamByYear.fulfilled]: (state, action) => {
            const team = action.payload;
            state.coach = team.coach;
            state.players = team.players;
        },
        [createPlayer.fulfilled]: (state, action) => {
            state.players = [
                ...state.players,
                action.payload,
            ];
        },
        [updatePlayer.fulfilled]: (state, action) => {
            const index = state.players.findIndex((player) => player.id === action.payload.id);
            if (index > -1) {
                state.players[index] = action.payload;
            }
        },
    },
});

export const { setYear, setPlayers } = teamSlice.actions;

export default teamSlice.reducer;
