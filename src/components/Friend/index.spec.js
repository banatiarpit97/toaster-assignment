import React from 'react';
import renderer from 'react-test-renderer';

import Friend from './index';

it('renders correctly ', () => {
  const tree = renderer.create(<Friend driend={{name: 'arpit', commonFriends: 2}} />).toJSON();
  expect(tree).toMatchSnapshot();
});