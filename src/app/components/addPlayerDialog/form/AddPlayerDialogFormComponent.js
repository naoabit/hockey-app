import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classname from 'classnames';
import { setDialog } from '@app/reducers/dialog';

import FormInputCheckbox from '@app/components/core/formInput/checkbox/FormInputCheckboxComponent';
import FormInputText from '@app/components/core/formInput/text/FormInputTextComponent';
import FormInputNumber from '@app/components/core/formInput/number/FormInputNumberComponent';

import styles from '../_scss/addPlayerDialog.module.scss';

const LABEL_PREFIX = 'addPlayerForm.input';

const MAP_FORM_INPUT = {
    name: FormInputText,
    lastName: FormInputText,
    number: FormInputNumber,
    position: FormInputText,
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
            className: classname({
                [styles.checkboxInput]: key === 'isCaptain',
            }, styles.formInput),
            inputKey: key,
            label: `${LABEL_PREFIX}.${key}`,
            onChange,
            value: data[key],
        };
        return (
            <FormInput {...props} key={key}/>
        );
    });

    return (
        <div className={styles.form}>
            {renderFormInputs()}
        </div>
    );
};

export default AddPlayerForm;
