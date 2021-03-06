import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/rootReducer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const store = createStore(rootReducer)
describe('App', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><App /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
