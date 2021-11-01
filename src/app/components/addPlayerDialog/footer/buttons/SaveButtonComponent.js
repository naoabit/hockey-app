import React from 'react';
import { useDispatch } from 'react-redux';

import { createOrUpdatePlayer } from '@app/thunks/player';
import Button from '@app/components/core/button/ButtonComponent';
import { hideDialog } from '@app/reducers/dialog';
import { hide as hideOverlay } from '@app/reducers/overlay';

import styles from '../../_scss/addPlayerDialog.module.scss';

const SaveButton = () => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        await dispatch(createOrUpdatePlayer());
        dispatch(hideDialog());
        dispatch(hideOverlay());
    };

    return (
        <Button
            className={styles.save}
            handleClick={handleClick}
            text={'addPlayerForm.save'}
        />
    );
};

export default SaveButton;
