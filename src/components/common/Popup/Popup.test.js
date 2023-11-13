import React from 'react';
import { shallow } from 'enzyme';
import Popup from './Popup';

describe('Modal Popup', () => {
  it('should render without crashing', () => {
    const component = shallow(<Popup />);
    expect(component).toBeTruthy();
  });
});
