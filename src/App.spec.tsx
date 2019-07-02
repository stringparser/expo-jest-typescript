import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

console.log('App', App);

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});