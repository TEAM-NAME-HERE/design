import React from 'react';
import ReactDOM from 'react-dom';
import UserLanding from './UserLanding';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserLanding />, div);
});
