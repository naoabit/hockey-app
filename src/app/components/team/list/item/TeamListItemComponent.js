import React from 'react';

import PlayerPropTypes from '@app/propTypes/player';

import EditButton from './editButtton/TeamListItemEditButtonComponent';
import TeamListItemCaptain from './TeamListItemCaptainComponent';
import styles from '../_scss/teamList.module.scss';

const TeamListItem = (props) => (
    <ul className={styles.listItem}>
        <li className={styles.listItemColumn}>{props.name}</li>
        <li className={styles.listItemColumn}>{props.lastName}</li>
        <li className={styles.listItemColumn}>{props.number}</li>
        <li className={styles.listItemColumn}>{props.position}</li>
        <TeamListItemCaptain isCaptain={props.isCaptain}/>
        <EditButton {...props}/>
    </ul>
);

TeamListItem.propTypes = PlayerPropTypes;

export default TeamListItem;
