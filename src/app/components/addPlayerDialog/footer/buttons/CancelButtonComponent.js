import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@app/components/core/button/ButtonComponent';
import { hideDialog } from '@app/reducers/dialog';
import { hide as hideOverlay } from '@app/reducers/overlay';

import styles from '../../_scss/addPlayerDialog.module.scss';

const CancelButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(hideDialog());
        dispatch(hideOverlay());
    };

    return (
        <Button
            className={styles.cancel}
            handleClick={handleClick}
            text={'addPlayerForm.cancel'}
        />
    );
};

export default CancelButton;
