// Trigger dotenv-safe only for developments purposes.
if (!process.env.NODE_ENV) {
    require('dotenv-safe').config(); // eslint-disable-line global-require
}

const path = require('path'); // eslint-disable-line
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const webpackConfig = require('./webpack.config');

const sass = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/app')],
    },
    cssModules: true,
    assetPrefix: process.env.APP_URL,
    publicRuntimeConfig: {
        APP_URL: process.env.APP_URL,
    },
    env: {
        API_GATEWAY_HOST: process.env.API_GATEWAY_HOST,
    },
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            });
            config.devtool = 'cheap-module-source-map';
        }

        return config;
    },
};

module.exports = withPlugins([
    withImages(sass),
    withBundleAnalyzer({
        enabled: process.env.ANALYZE === 'true',
    }),
]);
