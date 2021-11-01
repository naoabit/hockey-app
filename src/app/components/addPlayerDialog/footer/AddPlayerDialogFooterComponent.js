import React from 'react';

import CancelButton from './buttons/CancelButtonComponent';
import SaveButton from './buttons/SaveButtonComponent';

import styles from '../_scss/addPlayerDialog.module.scss';

const AddPlayerDialogFooter = () => (
    <div className={styles.dialogFooter}>
        <CancelButton />
        <SaveButton />
    </div>
);

export default AddPlayerDialogFooter;
