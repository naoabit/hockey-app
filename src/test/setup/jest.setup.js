/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
/** eslint-enable import/no-extraneous-dependencies */
Enzyme.configure({ adapter: new Adapter() });
