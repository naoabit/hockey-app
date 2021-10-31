import React from 'react';

import YearPicker from './yearPicker/YearPickerComponent';
import TeamList from './list/TeamListComponent';

import styles from './_scss/teamComponent.module.scss';

const Team = () => (
    <div className={styles.teamComponentWrapper}>
        <YearPicker />
        <TeamList />
    </div>
);

export default Team;
