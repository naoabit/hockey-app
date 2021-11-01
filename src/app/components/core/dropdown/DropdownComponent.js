import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './_scss/dropdown.module.scss';

const Dropdown = (props) => {
    const className = classNames(
        props.className,
        styles.dropdown,
    );

    return (
        <div className={className}>
            <Select
                onChange={props.onHandleChange}
                options={props.options}
            />
        </div>
    );
};

Dropdown.propTypes = {
    className: PropTypes.string,
    onHandleChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
};

Dropdown.defaultProps = {
    options: [],
};

export default Dropdown;
