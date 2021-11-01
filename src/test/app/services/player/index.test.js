import playerService from '@app/services/player';
import { post, get, put } from '@app/utils/api';

jest.mock('@app/utils/api');

const HOST = 'http://localhost:8080';

describe('Player service', () => {
    it('createPlayer() - should return created player', async () => {
        const player = {
            id: 123,
            name: 'name',
            lastName: 'lastName',
        };
        post.mockResolvedValue(player);

        const result = await playerService.createPlayer({
            name: 'name',
            lastName: 'lastName',
        }, 2021);
        expect(result).toEqual(player);
        expect(post).toHaveBeenCalledWith(`${HOST}/api/player/2021`, {
            name: 'name',
            lastName: 'lastName',
        });
    });
    it('updatePlayer() - should return updated player', async () => {
        const player = {
            id: 123,
            name: 'name',
            lastName: 'lastName',
            isCaptain: true,
        };
        put.mockResolvedValue(player);

        const result = await playerService.updatePlayer({
            id: 123,
            isCaptain: true,
        });
        expect(result).toEqual(player);
        expect(put).toHaveBeenCalledWith(`${HOST}/api/player/123/captain`, {
            isCaptain: true,
        });
    });
    it('getTeamByYear() - should return team', async () => {
        const team = {
            id: 123,
            player: [],
            coach: 'Coach',
        };
        get.mockResolvedValue(team);

        const result = await playerService.getTeamByYear(2021);
        expect(result).toEqual(team);
        expect(get).toHaveBeenCalledWith(`${HOST}/api/team/2021`);
    });
});
