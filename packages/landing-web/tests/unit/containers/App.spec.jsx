import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../../src/containers/App';

describe('<App />', () => {
  const initialProps = {
    user: 'mock user',
  };

  it('should render the app container', () => {
    const componentsWrapper = shallow(<App {...initialProps} />);
    
    expect(componentsWrapper.find('div.demo-app').length).toEqual(1);
  });
});