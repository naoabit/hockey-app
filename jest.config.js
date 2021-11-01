// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    clearMocks: true,
    verbose: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/test/setup/fileMock.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '@app(.*)$': '<rootDir>/src/app/$1',
    },
    setupFiles: ['<rootDir>/src/test/setup/jest.setup.js'],
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/',
        '<rootDir>/src/app/docs/',
    ],
};
