import React from 'react';
import { shallow } from 'enzyme';
import ProductSearch from './ProductSearch';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
