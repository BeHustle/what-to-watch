import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`Render empty offers screen`, () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
