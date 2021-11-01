import axios from 'axios';

/**
 * get method
 * @param {String} endpoint
 * @returns {Promise<Object>}
 */
export const get = async (endpoint) => {
    const { data } = await axios.get(endpoint);
    return data;
};

/**
 * post method
 * @param {String} endpoint
 * @param {Object} body
 * @returns {Promise<Object>}
 */
export const post = async (endpoint, body) => {
    const { data } = await axios.post(endpoint, body);
    return data;
};

/**
 * put method
 * @param {String} endpoint
 * @param {Object} body
 * @returns {Promise<Object>}
 */
export const put = async (endpoint, body) => {
    const { data } = await axios.put(endpoint, body);
    return data;
};

export default {};
