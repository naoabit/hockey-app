import React from 'react';

import DialogForm from './form/AddPlayerDialogFormComponent';
import DialogFooter from './footer/AddPlayerDialogFooterComponent';
import styles from './_scss/addPlayerDialog.module.scss';

const AddPlayerDialog = () => (
    <div className={styles.dialog}>
        <DialogForm />
        <DialogFooter />
    </div>
);

export default AddPlayerDialog;
