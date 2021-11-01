import React from 'react';
import { Translate } from 'react-redux-i18n';
import classNames from 'classnames';

import styles from '../_scss/teamList.module.scss';

const PREFIX = 'team.list';

const TITLES = [
    `${PREFIX}.name`,
    `${PREFIX}.lastName`,
    `${PREFIX}.number`,
    `${PREFIX}.position`,
    `${PREFIX}.isCaptain`,
];

const TeamListItemHeader = () => {
    const className = classNames(
        styles.listItem,
        styles.listItemHeader,
    );

    const renderTitles = () => (
        TITLES.map((title, index) => (
            <li className={styles.listItemColumn} key={index}>
                <Translate dangerouslySetHtml key={index} value={title}/>
            </li>
        ))
    );

    return (
        <ul className={className}>
            {renderTitles()}
        </ul>
    ); };

export default TeamListItemHeader;
