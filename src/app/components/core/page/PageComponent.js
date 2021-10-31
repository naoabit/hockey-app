import React from 'react';
import PropTypes from 'prop-types';
import styles from './_scss/page.module.scss';

const Page = (props) => (
    <div className={`${styles.page} ${props.className}`}>
        <div className={styles.pageContainer}>
            { props.children }
        </div>
    </div>
);

Page.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Page.defaultProps = {
    className: '',
};

export default Page;
