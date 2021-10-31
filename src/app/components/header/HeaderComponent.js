import React from 'react';
import { Translate } from 'react-redux-i18n';

import styles from './_scss/header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <p className={styles.text}>
            <Translate
                dangerousHTML
                value="app.title"
            />
        </p>
    </header>
);
export default Header;
