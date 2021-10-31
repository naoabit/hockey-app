import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import reducer from './reducers';
import translations from './translations';

const initState = {};

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or
* client side
* @param {Request} options.req NodeJS Request object
* (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object
* (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store
* in global namespace for safe HMR
*/
const store = () => {
    const state = initState;
    const appStore = configureStore(
        {
            reducer,
            preloadedState: state,
            middleware: getDefaultMiddleware(),
            // .concat(logger), ONLY IF YOU WANT IT
        },
    );

    syncTranslationWithStore(appStore);
    appStore.dispatch(loadTranslations(translations));
    const { locale } = appStore.getState().i18n;
    if (locale) {
        appStore.dispatch(setLocale(locale));
    }

    return appStore;
};

export default store();
