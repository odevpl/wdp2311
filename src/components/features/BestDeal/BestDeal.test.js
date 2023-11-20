import React from 'react';
import { shallow } from 'enzyme';
import BestDeal from './BestDeal';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component BestDeal', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <BestDeal />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
