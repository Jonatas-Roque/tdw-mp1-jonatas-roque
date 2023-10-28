import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/header';

test('Header snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});