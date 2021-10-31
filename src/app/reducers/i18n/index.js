import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locale: 'en',
    translations: null,
};

const LOAD_TRANSLATION = '@@i18n/LOAD_TRANSLATIONS';
const SET_LOCALE = '@@i18n/SET_LOCALE';

const i18nSlice = createSlice({
    name: 'i18n',
    initialState,
    extraReducers: {
        [SET_LOCALE]: (state, action) => {
            state.locale = action.locale;
        },
        [LOAD_TRANSLATION]: (state, action) => {
            state.translations = action.translations;
        },
    },
});

export default i18nSlice.reducer;
