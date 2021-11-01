import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Translate } from 'react-redux-i18n';
import styles from './_scss/button.module.scss';

const Button = (props) => {
    const className = classNames({
        [styles.disabled]: props.disabled,
    }, props.className, styles.button);

    const handleClick = (ev) => {
        ev.preventDefault();
        if (!props.disabled && props.handleClick) {
            props.handleClick();
        }
    };

    return (
        <div className={className} onClick={handleClick}>
            <Translate dangerousHTML value={props.text}/>
            <div className={styles.icon}>
                {props.icon}
            </div>
        </div>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string,
};

Button.defaultProps = {
    classes: '',
    disabled: false,
};

export default Button;
