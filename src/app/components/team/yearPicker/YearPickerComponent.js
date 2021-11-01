import React from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from '@app/components/core/dropdown/DropdownComponent';

import { getTeamByYear } from '@app/thunks/player';
// TODO: get years list in date range
const YEARS = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021,
];
const options = YEARS.map((year) => ({ value: year, label: year }));

const YearPicker = () => {
    const dispatch = useDispatch();

    const onHandleChange = async () => {
        await dispatch(getTeamByYear());
    };

    return (
        <Dropdown onHandleChange={onHandleChange} options={options}/>
    );
};

export default YearPicker;
