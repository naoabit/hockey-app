import playerService from '@app/services/player';
import * as playerThunks from '@app/thunks/player';
import mockStore from '../../store';

jest.mock('@app/services/player');
playerService.createPlayer.mockImplementation(() => ({
    id: 1,
    name: 'Jeanne',
}));

const store = mockStore({
    team: {
        year: 2021,
    },
    dialog: {
        data: {
            name: 'Jeanne',
        },
    },
});

describe('Thunks] createPlayer', () => {
    it('should request playerService', async () => {
        const { payload } = await store.dispatch(playerThunks.createPlayer());

        expect(playerService.createPlayer).toHaveBeenCalledTimes(1);
        expect(playerService.createPlayer).toHaveBeenCalledWith({
            name: 'Jeanne',
        }, 2021);

        expect(payload).toMatchObject({
            id: 1,
            name: 'Jeanne',
        });
    });
});
