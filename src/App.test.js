import React from 'react';
import { shallow } from 'enzyme';
import store from './redux/store';
import ProductBox from './components/common/ProductBox/ProductBox';
import { Provider } from 'react-redux';

describe('Component ProductBox', () => {
  it('should renders without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
