import React from 'react';
import { shallow } from 'enzyme';
import Header from 'presentation/Header/Header';

describe('Header', () => {
  it('renders', () => {
    const element = shallow(<Header />);
    expect(element).toBeTruthy();
  });

  it('should contain an image', () => {
    const element = shallow(<Header />);
    expect(element.find('img').length).toBeGreaterThan(0);
  })
});