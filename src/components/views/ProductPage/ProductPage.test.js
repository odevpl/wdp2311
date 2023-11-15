import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('ProductPage', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );
  });
});
