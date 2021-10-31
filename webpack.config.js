// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@server': path.resolve(__dirname, './src/server'),
            '@test': path.resolve(__dirname, './src/test'),
        },
    },
};
