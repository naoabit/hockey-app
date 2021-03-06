import React, { useState } from 'react';
import classname from 'classnames';
import Proptypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

const FormInputCheckbox = (props) => {
    const [isChecked, setIsChecked] = useState(props.value);

    const className = classname(
        props.className,
    );

    const onChange = () => {
        setIsChecked(!isChecked);
        props.onChange({
            [props.inputKey]: !isChecked,
        });
    };

    return (
        <div className={className}>
            <input
                checked={isChecked}
                className={className}
                onChange={onChange}
                type={'checkbox'}
            />
            <label>
                <Translate
                    dangerousHTML
                    value={props.label}
                />
            </label>
        </div>
    );
};

FormInputCheckbox.propTypes = {
    value: Proptypes.bool,
    className: Proptypes.string,
    label: Proptypes.string,
    inputKey: Proptypes.string,
    onChange: Proptypes.func,
};

export default FormInputCheckbox;
