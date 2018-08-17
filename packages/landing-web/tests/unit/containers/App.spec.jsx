import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../../src/containers/App';

describe('<App />', () => {
  const initialProps = {
    user: 'mock user',
    loadUser: () => {},
  };

  it('should render the app container', () => {
    const componentsWrapper = shallow(<App {...initialProps} />);

    expect(componentsWrapper.find('div.landing-app').length).toEqual(1);
  });
});
