// eslint-disable-next-line import/no-extraneous-dependencies
import configureStore from 'redux-mock-store';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

export default mockStore;
