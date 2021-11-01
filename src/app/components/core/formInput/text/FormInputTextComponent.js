import React, { useState } from 'react';
import classname from 'classnames';
import Proptypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

const FormInputText = (props) => {
    const [value, setValue] = useState(props.value);

    const className = classname(
        props.className,
    );

    const onChange = (ev) => {
        setValue(ev.target.value);
        props.onChange({
            [props.inputKey]: ev.target.value,
        });
    };

    return (
        <div className={className}>
            <label>
                <Translate
                    dangerousHTML
                    value={props.label}
                />
            </label>
            <input
                onChange={onChange}
                type={'text'}
                value={value}
            />
        </div>
    );
};

FormInputText.propTypes = {
    className: Proptypes.string,
    inputKey: Proptypes.string,
    label: Proptypes.string,
    onChange: Proptypes.func,
    value: Proptypes.string,
};

export default FormInputText;
