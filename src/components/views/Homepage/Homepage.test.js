import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Compon Homepage', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Homepage />;
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
