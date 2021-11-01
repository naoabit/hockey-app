import { createAsyncThunk } from '@reduxjs/toolkit';
import playerService from '@app/services/player';

export const getTeamByYear = createAsyncThunk(
    'players/getTeamByYear',
    async (_, { getState }) => {
        const { team } = getState();

        const payload = await playerService.getTeamByYear(team.year);
        return {
            payload,
        };
    },
);

export const createOrUpdatePlayer = createAsyncThunk(
    'players/createOrUpdatePlayaer',
    async (_, { getState }) => {
        const { dialog, team } = getState();
        const { data } = dialog;

        let payload = {};
        if (!data.id) {
            payload = await playerService.createPlayer(data, team.year);
        } else {
            payload = await playerService.updatePlayer({
                id: data.id,
                isCaptain: data.isCaptain,
            });
        }

        return {
            payload,
        };
    },
);

export default {};
