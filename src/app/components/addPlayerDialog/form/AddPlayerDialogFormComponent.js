import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDialog } from '@app/reducers/dialog';
import FormInputCheckbox from '@app/components/core/formInput/checkbox/FormInputCheckboxComponent';
import styles from '../_scss/addPlayerDialog.module.scss';

const LABEL_PREFIX = 'addPlayerForm.input';

const MAP_FORM_INPUT = {
    isCaptain: FormInputCheckbox,
};

const storePropsSelector = (state) => ({
    id: state.dialog.id,
    data: state.dialog.data,
});

const AddPlayerForm = () => {
    const { id, data } = useSelector(storePropsSelector);
    const dispatch = useDispatch();

    const onChange = (newData) => {
        dispatch(setDialog({
            id,
            data: {
                ...data,
                ...newData,
            },
        }));
    };

    const renderFormInputs = () => Object.keys(MAP_FORM_INPUT).map((key) => {
        const FormInput = MAP_FORM_INPUT[key];
        const props = {
            inputKey: key,
            value: data[key],
            onChange,
            label: `${LABEL_PREFIX}.${key}`,
        };
        return (
            <FormInput {...props}/>
        );
    });

    return (
        <div className={styles.form}>
            {renderFormInputs()}
        </div>
    );
};

export default AddPlayerForm;
