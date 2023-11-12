import React from 'react';
import { shallow } from 'enzyme';
import BestDeal from './BestDeal';

describe('Component BestDeal', () => {
  it('should render without crashing', () => {
    const component = shallow(<BestDeal />);
    expect(component).toBeTruthy();
  });
});
