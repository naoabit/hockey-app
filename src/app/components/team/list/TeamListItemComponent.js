import React from 'react';
import PropTypes from 'prop-types';

const TeamListItem = (props) => (
    <>
        <div>{props.name}</div>
        <div>{props.lastName}</div>
        <div>{props.number}</div>
        <div>{props.position}</div>
        <div>{props.isCaptain}</div>
    </>
);

TeamListItem.propTypes = {
    isCaptain: PropTypes.bool,
    lastName: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
    position: PropTypes.string,
};

export default TeamListItem;
