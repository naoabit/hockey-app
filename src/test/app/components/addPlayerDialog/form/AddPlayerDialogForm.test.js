import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AddPlayerForm from '@app/components/addPlayerDialog/form/AddPlayerDialogFormComponent';
import { setDialog } from '@app/reducers/dialog';

jest.mock('@app/components/core/formInput/checkbox/FormInputCheckboxComponent', () => 'FormInputCheckbox');
jest.mock('@app/components/core/formInput/text/FormInputTextComponent', () => 'FormInputText');
jest.mock('@app/components/core/formInput/number/FormInputNumberComponent', () => 'FormInputNumber');
jest.mock('@app/reducers/dialog');
jest.mock('react-redux');

describe('<AddPlayerForm />', () => {
    const store = {
        dialog: {
            id: 1,
            data: {
                isCaptain: true,
            },
        },
    };
    useSelector.mockImplementationOnce((fn) => fn(store));
    useDispatch.mockImplementation(() => jest.fn());
    setDialog.mockImplementation(() => jest.fn());

    const wrapper = shallow(
        <AddPlayerForm />,
    );

    it('should render component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.props().className).toEqual('form');
        expect(wrapper.children().length).toEqual(5);

        expect(wrapper.childAt(0).is('FormInputText')).toBe(true);
        expect(wrapper.childAt(1).is('FormInputText')).toBe(true);
        expect(wrapper.childAt(2).is('FormInputNumber')).toBe(true);
        expect(wrapper.childAt(3).is('FormInputText')).toBe(true);
        expect(wrapper.childAt(4).is('FormInputCheckbox')).toBe(true);
    });
    
    it('should dispatch setDialog', () => {
        wrapper.childAt(0).props().onChange({ name: 'Dope name', isCaptain: false });
        expect(setDialog).toHaveBeenCalledWith({
            id: 1,
            data: {
                isCaptain: false,
                name: 'Dope name',
            },
        });
    });
    
});
