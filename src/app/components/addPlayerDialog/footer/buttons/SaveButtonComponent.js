import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPlayer, updatePlayer } from '@app/thunks/player';
import Button from '@app/components/core/button/ButtonComponent';
import { hideDialog } from '@app/reducers/dialog';
import { hide as hideOverlay } from '@app/reducers/overlay';

import styles from '../../_scss/addPlayerDialog.module.scss';

const storePropsSelector = (state) => ({
    playerData: state.dialog.data,
});

const SaveButton = () => {
    const { playerData } = useSelector(storePropsSelector);

    const dispatch = useDispatch();

    const handleClick = async () => {
        if (playerData.id) {
            await dispatch(updatePlayer());
        } else {
            await dispatch(createPlayer());
        }
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
