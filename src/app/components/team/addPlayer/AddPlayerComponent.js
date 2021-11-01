import React from 'react';

import Button from '@app/components/core/button/ButtonComponent';
import IconAdd from '@app/icons/add/IconAdd';

import styles from '../_scss/teamComponent.module.scss';

const AddPlayer = () => {
    const handleClick = () => {
        // TODO: open pop-in + show overlay
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
