import { createAsyncThunk } from '@reduxjs/toolkit';
import playerService from '@app/services/player';

export const getTeamByYear = createAsyncThunk(
    'players/getTeamByYear',
    async (_, { getState }) => {
        const { team } = getState();

        return playerService.getTeamByYear(team.year);
    },
);

export const createPlayer = createAsyncThunk(
    'players/createPlayer',
    async (_, { getState }) => {
        const { dialog, team } = getState();
        const { data } = dialog;

        return playerService.createPlayer(data, team.year);
    },
);

export const updatePlayer = createAsyncThunk(
    'players/updatePlayer',
    async (_, { getState }) => {
        const { dialog } = getState();
        const { data } = dialog;

        return playerService.updatePlayer({
            id: data.id,
            isCaptain: data.isCaptain,
        });
    },
);

export default {};
