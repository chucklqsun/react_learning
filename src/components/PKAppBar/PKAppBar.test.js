import React from 'react';
import ReactDOM from 'react-dom';
import PKAppBar from './PKAppBar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PKAppBar />, div);
});