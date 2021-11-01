import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Translate } from 'react-redux-i18n';

import styles from './_scss/button.module.scss';

const Button = (props) => {
    const className = classNames(props.className, styles.button);

    const handleClick = (ev) => {
        ev.preventDefault();
        if (props.handleClick) {
            props.handleClick();
        }
    };

    const text = props.text || '';

    return (
        <div className={className} onClick={handleClick}>
            <Translate dangerousHTML value={text}/>
            <div className={styles.icon}>
                {props.icon}
            </div>
        </div>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    icon: PropTypes.node,
    text: PropTypes.string,
};

Button.defaultProps = {
    classes: '',
};

export default Button;
