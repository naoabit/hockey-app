import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import IconEdit from '@app/icons/edit/IconEdit';
import Button from '@app/components/core/button/ButtonComponent';

import { ADD_PLAYER_DIALOG_ID } from '@app/constants/dialog';
import { setDialog, showDialog } from '@app/reducers/dialog';
import { show as showOverlay } from '@app/reducers/overlay';

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

EditButton.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    lastName: PropTypes.string,
    number: PropTypes.number,
    position: PropTypes.string,
    isCaptain: PropTypes.bool,
};

export default EditButton;
