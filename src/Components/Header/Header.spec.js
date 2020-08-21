import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('It should render without errors', () => {
    const wrapper = component.find('.title-name');
    expect(wrapper.length).toBe(1);
  });

  it('It should render a h1 with text', () => {
    const wrapper = component.find('.title-name');
    expect(wrapper.text().includes('You have  tasks')).toBe(true);
  });
});
