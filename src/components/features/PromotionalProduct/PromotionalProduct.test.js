import React from 'react';
import { shallow } from 'enzyme';
import PromotionalProduct from './PromotionalProduct';

describe('Component PromotionalProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotionalProduct />);
    expect(component).toBeTruthy();
  });
});
