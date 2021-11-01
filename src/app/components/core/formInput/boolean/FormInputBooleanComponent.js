import React from 'react';
import classname from 'classnames';
import Proptypes from 'prop-types';

const FormInputBoolean = (props) => {
    const className = classname(
        props.className,
    );

    const handleClick = () => {
        props.handleClick();
    };

    return (
        <input
            checked={props.checked}
            className={className}
            onChange={handleClick}
            type={'checkbox'}
        />
    );
};

FormInputBoolean.propTypes = {
    checked: Proptypes.bool.isRequired,
    className: Proptypes.string,
    handleClick: Proptypes.func,
};

FormInputBoolean.defaultProps = {
    checked: false,
};

export default FormInputBoolean;
