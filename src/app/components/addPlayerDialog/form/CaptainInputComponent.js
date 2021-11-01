import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Translate } from 'react-redux-i18n';

import { setDialog } from '@app/reducers/dialog';
import FormInputBoolean from '@app/components/core/formInput/boolean/FormInputBooleanComponent';
import styles from '../_scss/addPlayerDialog.module.scss';

const storePropsSelector = (state) => ({
    id: state.dialog.id,
    data: state.dialog.data,
});

const CaptainInput = () => {
    const { id, data } = useSelector(storePropsSelector);
    const { isCaptain } = data;
    const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState(isCaptain);

    const handleClick = () => {
        setIsChecked(!isChecked);
        dispatch(setDialog({
            id,
            data: {
                ...data,
                isCaptain: !isChecked,
            },
        }));
    };

    return (
        <div className={styles.formInput}>
            <FormInputBoolean checked={isChecked} handleClick={handleClick}/>
            <label>
                <Translate
                    dangerousHTML
                    value='addPlayerForm.input.isCaptain'
                />
            </label>
        </div>
    );
};

export default CaptainInput;
