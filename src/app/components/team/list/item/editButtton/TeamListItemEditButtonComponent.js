import React from 'react';
import { useDispatch } from 'react-redux';

import IconEdit from '@app/icons/edit/IconEdit';
import Button from '@app/components/core/button/ButtonComponent';
import { ADD_PLAYER_DIALOG_ID } from '@app/constants/dialog';
import { setDialog, showDialog } from '@app/reducers/dialog';
import { show as showOverlay } from '@app/reducers/overlay';
import PlayerPropTypes from '@app/propTypes/player';

import styles from '../../_scss/teamList.module.scss';

const EditButton = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setDialog({
            id: ADD_PLAYER_DIALOG_ID,
            data: props,
        }));
        dispatch(showDialog());
        dispatch(showOverlay());
    };

    return (
        <Button
            className={styles.editButton}
            handleClick={handleClick}
            icon={<IconEdit />}
        />
    );
};

EditButton.propTypes = PlayerPropTypes;

export default EditButton;
