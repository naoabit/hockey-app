import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hide } from '@app/reducers/overlay';

import styles from './_scss/overlay.module.scss';

const storePropsSelector = (state) => ({
    show: state.overlay.show,
});

const Overlay = () => {
    const { show } = useSelector(storePropsSelector);
    const dispatch = useDispatch();

    if (!show) {
        return null;
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        dispatch(hide());
    };

    return (
        <div className={styles.overlay} onClick={handleClick} />
    );
};

export default Overlay;
