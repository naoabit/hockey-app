import { put, post, get } from '@app/utils/api';

const HOST = 'http://localhost:8080';

class PlayerService {
    /**
     * Create one
     * @param {Object} playerData
     * @param {String} playerData.name
     * @param {String} playerData.lastName
     * @param {Number} playerData.number
     * @param {String} playerData.position
     * @param {Boolean} playerData.isCaptain
     * @param {Number} year
     * @returns {Promise<Object>}
     */
    async createPlayer(playerData, year) {
        const data = await post(
            `${HOST}/api/player/${year}`,
            playerData,
        );

        if (!data) {
            return [];
        }

        return data;
    }

    /**
     * Update player by id
     * @param {Object} playerData
     * @param {Number} playerData.id
     * @param {Boolean} playerData.isCaptain
     * @returns {Promise<Object>}
     */
    async updatePlayer(playerData) {
        const data = await put(
            `${HOST}/api/player/${playerData.id}/captain`,
            { isCaptain: playerData.isCaptain },
        );

        return data;
    }

    /**
     * Get team by year
     * @param {Number} year
     * @returns {Promise<Object>}
     */
    async getTeamByYear(year) {
        const data = await get(
            `${HOST}/api/team/${year}`,
        );

        return data;
    }
}

export default new PlayerService();
