import React from 'react';

import CaptainInput from './CaptainInputComponent';

import styles from '../_scss/addPlayerDialog.module.scss';

const AddPlayerDialogForm = () => (
    <div className={styles.dialogForm}>
        <CaptainInput />
    </div>
);

export default AddPlayerDialogForm;
