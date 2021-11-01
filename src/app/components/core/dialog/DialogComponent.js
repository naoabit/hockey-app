import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { hideDialog } from '@app/reducers/dialog';
import styles from './_scss/dialog.module.scss';

const storePropsSelector = (state) => ({
    show: state.dialog.show,
    overlayShown: state.overlay.show,
});

const DialogComponent = (props) => {
    const { overlayShown, show } = useSelector(storePropsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!overlayShown) {
            dispatch(hideDialog());
        }
    }, [overlayShown]);

    if (!show) {
        return null;
    }

    return (
        <div className={styles.dialog}>
            {props.children}
        </div>
    );
};

DialogComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DialogComponent;
