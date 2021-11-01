import React from 'react';

import YearPicker from './yearPicker/YearPickerComponent';
import AddPlayer from './addPlayer/AddPlayerComponent';
import TeamList from './list/TeamListComponent';

import styles from './_scss/teamComponent.module.scss';

const Team = () => (
    <div className={styles.teamComponentWrapper}>
        <YearPicker />
        <AddPlayer />
        <TeamList />
    </div>
);

export default Team;
