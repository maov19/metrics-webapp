import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../store';
import Assets from '../Assets';

test('Assets component matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Assets />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
