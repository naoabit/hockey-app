import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '@app/components/core/button/ButtonComponent';

jest.mock('react-redux-i18n');

describe('<Button />', () => {
    describe('enabled', () => {
        const spy = jest.fn();
        const props = {
            className: 'la classe',
            handleClick: spy,
            icon: 'icon',
            text: 'A button',
        };

        const wrapper = shallow(
            <Button {...props}/>,
        );

        it('should render component', () => {
            expect(toJson(wrapper)).toMatchSnapshot();
            
            const text = wrapper.childAt(0);
            const icon = wrapper.childAt(1);
            
            expect(wrapper.props().className).toEqual('la classe button');
            expect(!!wrapper.props().onClick).toBe(true);
            expect(text.is('Translate')).toBe(true);
            expect(icon.text()).toEqual('icon');
        });

        it('should call props.handleClick', () => {
            wrapper.simulate('click', { preventDefault: jest.fn() });
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
