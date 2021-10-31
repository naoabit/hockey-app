require('dotenv').config(); // eslint-disable-line global-require

const path = require('path');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const sass = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/app')],
    },
    cssModules: true,
    assetPrefix: process.env.APP_URL,
    publicRuntimeConfig: {
        APP_URL: process.env.APP_URL,
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
