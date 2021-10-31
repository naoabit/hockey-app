import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from '../_scss/teamList.module.scss';

const TeamListItem = (props) => {
    const className = classNames({
        [styles.active]: props.isCaptain,
    },
    styles.captain);

    return (
        <div className={styles.listItemColumn}>
            <div className={className} />
        </div>
    );
};

TeamListItem.propTypes = {
    isCaptain: PropTypes.bool,
};

export default TeamListItem;
