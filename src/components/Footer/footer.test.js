import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import Logo from '../Logo/Logo';

it('renders correctly', () => {
  const tree = renderer
    .create(<Footer><Logo /></Footer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
