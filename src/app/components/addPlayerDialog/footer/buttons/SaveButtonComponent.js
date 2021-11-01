import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@app/components/core/button/ButtonComponent';
import { hideDialog } from '@app/reducers/dialog';
import { hide as hideOverlay } from '@app/reducers/overlay';

import styles from '../../_scss/addPlayerDialog.module.scss';

const storePropsSelector = (state) => ({
    playerData: state.dialog.data,
});

const SaveButton = () => {
    const dispatch = useDispatch();
    const { playerData } = useSelector(storePropsSelector);
    console.log(playerData);

    const handleClick = () => {
        // TODO: dispatch save/edit player
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
