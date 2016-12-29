import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from 'presentation/Counter/Counter';

describe('Counter', () => {
  it('renders', () => {
    const element = shallow(<Counter />);
    expect(element).toBeTruthy();
  });

  it('should have an inital counter state of 0', () => {
  const element = mount(<Counter />);
  expect(element.state('counter')).toEqual(0);
  });

  it('should increment the counter on increment button click', () => {
    const element = mount(<Counter />);
    element.find('.Counter__increment').simulate('click');
    expect(element.state('counter')).toBeGreaterThan(0);
  });

  it('should decremnt the counter on decrement button click', () => {
    const element = mount(<Counter />);
    element.find('.Counter__decrement').simulate('click');
    expect(element.state('counter')).toBeLessThan(0);
  });
});