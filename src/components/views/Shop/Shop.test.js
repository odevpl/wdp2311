import React from 'react';
import Shop from './Shop';
import { shallow } from 'enzyme';

describe('Component Shop', () => {
  it('should render without crashing', () => {
    const component = shallow(<Shop />);
    expect(component).toBeTruthy();
  });
});
