import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '@app/components/core/dropdown/DropdownComponent';

import { setYear, setPlayers } from '@app/reducers/team';
import { getTeamByYear } from '@app/thunks/player';

// TODO: get years list in date range
const YEARS = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021,
];
const options = YEARS.map((year) => ({ value: year, label: year }));

const storePropsSelector = (state) => ({
    selectedYear: state.team.year,
});

const YearPicker = () => {
    const { selectedYear } = useSelector(storePropsSelector);

    const dispatch = useDispatch();

    const onHandleChange = async (option) => {
        dispatch(setYear(option.value));
        dispatch(setPlayers([]));
    };

    useEffect(() => {
        dispatch(getTeamByYear());
    }, [selectedYear]);

    const defaultValue = options.find((option) => option.value === selectedYear);

    return (
        <Dropdown defaultValue={defaultValue} onHandleChange={onHandleChange} options={options}/>
    );
};

export default YearPicker;
