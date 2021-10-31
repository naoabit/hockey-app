import React from 'react';
import { useSelector } from 'react-redux';
import TeamListHeader from './header/TeamListHeaderComponent';
import TeamListItem from './item/TeamListItemComponent';

const storePropsSelector = (state) => ({
    players: state.team.players,
});

const TeamList = () => {
    const { players } = useSelector(storePropsSelector);

    const renderPlayers = () => (
        players.map((player, index) => <TeamListItem key={index} {...player}/>)
    );

    return (
        <>
            <TeamListHeader />
            {renderPlayers()}
        </>
    );
};

export default TeamList;
