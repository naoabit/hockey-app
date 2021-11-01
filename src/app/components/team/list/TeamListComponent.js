import React from 'react';
import { useSelector } from 'react-redux';
import TeamListHeader from './header/TeamListHeaderComponent';
import TeamListItem from './item/TeamListItemComponent';

import styles from './_scss/teamList.module.scss';

const storePropsSelector = (state) => ({
    players: state.team.players,
});

const TeamList = () => {
    const { players } = useSelector(storePropsSelector);

    const renderPlayers = () => (
        players.map((player, index) => <TeamListItem key={index} {...player}/>)
    );

    return (
        <div className={styles.teamListWrapper}>
            <TeamListHeader />
            {renderPlayers()}
        </div>
    );
};

export default TeamList;
