import React from 'react';

import DialogFooter from './footer/AddPlayerDialogFooterComponent';
import styles from './_scss/addPlayerDialog.module.scss';

const AddPlayerDialog = () => (
    <div className={styles.dialog}>
        <DialogFooter />
    </div>
);

export default AddPlayerDialog;
