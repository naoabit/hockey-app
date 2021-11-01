import React from 'react';
import { useDispatch } from 'react-redux';

import { ADD_PLAYER_DIALOG_ID } from '@app/constants/dialog';
import Button from '@app/components/core/button/ButtonComponent';
import IconAdd from '@app/icons/add/IconAdd';
import { setDialog, showDialog } from '@app/reducers/dialog';
import { show as showOverlay } from '@app/reducers/overlay';

import styles from '../_scss/teamComponent.module.scss';

const AddPlayer = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setDialog({
            id: ADD_PLAYER_DIALOG_ID,
            data: {},
        }));
        dispatch(showDialog());
        dispatch(showOverlay());
    };

    return (
        <Button
            className={styles.addPlayerButton}
            handleClick={handleClick}
            icon={<IconAdd />}
            text={'team.addPlayer'}
        />
    );
};

export default AddPlayer;
