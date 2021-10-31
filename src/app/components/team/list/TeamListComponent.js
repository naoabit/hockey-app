import React from 'react';
import { useSelector } from 'react-redux';
import TeamListItem from './TeamListItemComponent';

const storePropsSelector = (state) => ({
    players: state.team.players,
});

const TeamList = () => {
    const { players } = useSelector(storePropsSelector);

    const renderPlayers = () => (
        players.map((player, index) => <TeamListItem key={index} {...player}/>)
    );

    return renderPlayers();
};

export default TeamList;
