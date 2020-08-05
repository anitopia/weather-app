import React from 'react';
import { shallow, configure } from 'enzyme';
import Forecast from './Forecast';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../store/rootReducer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const store = createStore(rootReducer)
describe('Forecast', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><Forecast /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
