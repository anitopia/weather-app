import React from 'react';
import { shallow, configure } from 'enzyme';
import Details from './Details';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../store/rootReducer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const store = createStore(rootReducer)
describe('Details', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><Details /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
